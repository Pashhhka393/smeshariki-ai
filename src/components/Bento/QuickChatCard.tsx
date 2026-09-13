"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useCharacterStore } from "@/store/useCharacterStore";

interface Messages {
  id: string;
  role: string;
  content: string;
}

const QuickChatCard = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  //Zustand
  const { selectedCharacter, inputPrompt, setInputPrompt } =
    useCharacterStore();
  const [messages, setMessages] = useState<Messages[]>([]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputPrompt]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPrompt.trim()) return;
    const userMessage: Messages = {
      id: Date.now().toString(),
      role: "user",
      content: inputPrompt.trim(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt("");
  };
  return (
    <article className="col-span-1 flex h-130 flex-col justify-between rounded-4xl border-[1.50px] border-white bg-white/45 p-5 shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] backdrop-blur-xl md:col-span-5">
      <header className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 shrink-0 cursor-pointer overflow-hidden rounded-full">
            <Image
              className="h-full w-full object-cover"
              src={selectedCharacter.avatarImg}
              alt="smesharik-image"
              width={36}
              height={36}
            />
          </div>
          <div>
            <h2 className="text-[18px] font-extrabold whitespace-nowrap text-[#1c252c]">
              {selectedCharacter.name} AI
            </h2>
            <span className="text-[11px] text-green-500">В сети</span>
          </div>
        </div>
      </header>

      {/* Сообщения в чате */}
      {messages.length === 0 ? (
        <div className="flex flex-1 items-center justify-center p-2">
          <div className="flex max-w-70 flex-col items-center justify-center rounded-3xl border border-white bg-white/50 p-6 text-center shadow-xs backdrop-blur-md">
            <div className="mb-3 h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm">
              <Image
                className="h-full w-full object-cover"
                src={selectedCharacter.avatarImg}
                alt="img-chracter"
                width={56}
                height={56}
              />
            </div>

            <h3 className="mb-1.5 text-[17px] font-black text-[#1c252c]">
              {selectedCharacter.welcomeMessage}
            </h3>

            <p className="text-[12px] leading-relaxed font-medium text-[#4f636f]">
              Напиши мне что-нибудь в поле ниже или выбери готовую тему из
              быстрого старта
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 flex w-full flex-1 scrollbar-thin flex-col gap-4 overflow-y-auto pr-2">
          {messages.map((msg) => (
            <div key={msg.id} className="flex w-full flex-col">
              {msg.role === "user" ? (
                <div className="ml-auto w-fit max-w-[80%] rounded-2xl bg-[#4bc5fa] px-4 py-3 text-[14px] leading-[140%] text-white shadow-xs">
                  {msg.content}
                </div>
              ) : (
                <div className="flex max-w-[85%] items-start gap-2">
                  <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white shadow-sm">
                    <Image
                      className="h-full w-full object-cover"
                      src={selectedCharacter.avatarImg}
                      alt={selectedCharacter.name}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="mr-auto w-fit rounded-2xl bg-[#7bd082] px-4 py-3 shadow-xs">
                    <h2 className="mb-1 text-[11px] font-bold tracking-wider text-white uppercase">
                      {selectedCharacter.name}
                    </h2>
                    <p className="text-[14px] leading-[140%] text-white">
                      {msg.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
        className="mt-5 flex w-full items-center justify-between rounded-[20px] bg-white px-4 py-2.5 shadow-xs"
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={inputPrompt}
          className="flex-1 resize-none scrollbar-none items-end border-none text-sm outline-none placeholder:text-[#879ba6]"
          placeholder="Напиши ассистенту что-нибудь..."
          onChange={(e) => setInputPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#4bc5fa] transition-all hover:bg-[#23bafb] active:scale-95"
        >
          <ArrowUpRight className="h-5 w-5 text-white" />
        </button>
      </form>
    </article>
  );
};

export default QuickChatCard;
