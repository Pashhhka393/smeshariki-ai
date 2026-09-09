"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Character, useCharacterStore } from "@/store/useCharacterStore";
import { useEffect } from "react";

const QuickChatCard = () => {
  //Zustand
  const selectedCharacter: Character = useCharacterStore(
    (state) => state.selectedCharacter,
  );

  useEffect(() => {
    localStorage.setItem("character", JSON.stringify(selectedCharacter));
  });

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
      {/* <div className="mt-6 flex w-full flex-1 scrollbar-thin flex-col gap-4 overflow-y-auto pr-2">
        <div className="ml-auto w-fit max-w-[80%] self-end rounded-xl bg-[#4bc5fa] px-4 py-3 text-[14px] leading-[140%] text-white shadow-xs">
          Крош, привет! Посоветуй, чем заняться в эти выходные?
        </div>

        <div className="flex max-w-[85%] items-start gap-2">
          <div className="h-9 w-9 shrink-0 cursor-pointer overflow-hidden rounded-full">
            <Image
              className="h-full w-full object-cover"
              src="/smeshariki/krosh.jpg"
              alt="smesharik-image"
              width={36}
              height={36}
            />
          </div>
          <div className="mr-auto w-fit rounded-[20px] bg-[#7bd082] px-4 py-3 shadow-xs">
            <h2 className="mb-1 text-[12px] font-bold text-white">Крош</h2>
            <p className="text-[14px] leading-[140%] text-white">
              Ёлки-иголки! Конечно же прыгать выше солнца! Мы с Ёжиком устроим
              мега-турнир по скоростному катанию на морковках! Хочешь с нами?
            </p>
          </div>
        </div>
      </div> */}

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

      <form className="mt-5 flex w-full items-center justify-between rounded-[20px] bg-white px-4 py-2.5 shadow-xs">
        <input
          className="flex-1 border-none text-sm outline-none placeholder:text-[#879ba6]"
          placeholder="Напиши Крошу что-нибудь..."
          type="text"
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
