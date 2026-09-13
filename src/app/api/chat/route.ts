import { NextResponse } from "next/server";
import https from "https";

interface SberRequestInit extends RequestInit {
  agent?: https.Agent;
}

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export async function POST(req: Request) {
  try {
    const { prompt, characterName } = await req.json();

    const authResponse = await fetch(
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
        }),
        agent: agent,
      } as SberRequestInit,
    );

    const authData = await authResponse.json();
    const token = authData.access_token;

    if (!token) throw new Error("Failed to get access token");

    const chatResponse = await fetch(
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
            Отвечай максимально точно в его характере, используй его любимые фразочки и стиль речи. 
            Будь дружелюбным и поддерживающим, помогай пользователю с его вопросами, но не выходи за рамки характера ${characterName}.если пользователь задаёт вопрос, 
            который не соответствует характеру ${characterName}, 
            вежливо откажись отвечать и предложи задать другой вопрос.`,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
        }),
        agent: agent,
      } as SberRequestInit,
    );

    const chatData = await chatResponse.json();
    const botMessage = chatData.choices[0].message.content;

    return NextResponse.json({ text: botMessage });
  } catch (error: unknown) {
    console.error("GigaChat API Error:", error);
    return NextResponse.json({ error: "Ошибка связи с ИИ" }, { status: 500 });
  }
}
