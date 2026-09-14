import { NextResponse } from "next/server";
import { Agent, request } from "undici";

const dispatcher = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: Request) {
  try {
    const { prompt, characterName } = await req.json();

    const authResponse = await request(
      "https://ngw.devices.sberbank.ru:9443/api/v2/oauth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          RqUID: crypto.randomUUID(),
          Authorization: `Basic ${process.env.GIGACHAT_CLIENT_SECRET}`,
        },
        body: new URLSearchParams({
          scope: "GIGACHAT_API_PERS",
        }).toString(),
        dispatcher,
      },
    );

    if (authResponse.statusCode < 200 || authResponse.statusCode >= 300) {
      const errorText = await authResponse.body.text();
      throw new Error(`Ошибка авторизации GigaChat: ${errorText}`);
    }

    const authData = (await authResponse.body.json()) as {
      access_token?: string;
    };

    const token = authData.access_token;

    if (!token) {
      throw new Error("GigaChat не вернул access_token");
    }

    const chatResponse = await request(
      "https://gigachat.devices.sberbank.ru/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          model: "GigaChat",
          messages: [
            {
              role: "system",
              content: `Ты — персонаж мультфильма "Смешарики" по имени ${characterName}.
Отвечай в его характере, будь дружелюбным и помогай пользователю.`,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
        }),
        dispatcher,
      },
    );

    if (chatResponse.statusCode < 200 || chatResponse.statusCode >= 300) {
      const errorText = await chatResponse.body.text();
      throw new Error(`Ошибка GigaChat: ${errorText}`);
    }

    const chatData = (await chatResponse.body.json()) as {
      choices?: Array<{
        message?: {
          content?: string;
        };
      }>;
    };

    const botMessage = chatData.choices?.[0]?.message?.content;

    if (!botMessage) {
      throw new Error("GigaChat вернул ответ без текста");
    }

    return NextResponse.json({ text: botMessage });
  } catch (error: unknown) {
    console.error("GigaChat API Error:", error);
    return NextResponse.json({ error: "Ошибка связи с ИИ" }, { status: 500 });
  }
}
