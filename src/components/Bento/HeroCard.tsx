import Image from "next/image";
import { ArrowRight, Sparkles, X } from "lucide-react";

const HeroCard = () => {
  return (
    <article className="col-span-8 rounded-4xl border-[1.50px] border-white bg-white/45 px-10 py-10 shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] backdrop-blur-xl">
      <div className="flex max-w-47.5 items-center gap-1.5 rounded-[100px] bg-[#e1f5fe] px-1.5 py-1.5">
        <Sparkles className="h-5 fill-amber-300 text-amber-200" />
        <span className="text-[12px] font-bold text-[#4bc5fa]">
          Твой новый умный друг
        </span>
      </div>

      <div className="flex items-center gap-5">
        <div>
          <h1 className="my-5 max-w-87.5 text-[46px] leading-[118%] font-extrabold text-[#1c252c]">
            Смешарики AI Ассистент
          </h1>
          <p className="my-5 max-w-107.5 text-[18px] leading-[144%] text-[#4f636f]">
            Общайся с любимыми круглыми героями! Задавай вопросы по урокам
            Лосяшу, сочиняй стихи с Барашем или просто болтай с Крошем
          </p>
          <form
            className="flex w-full max-w-135 items-center gap-1.5 rounded-[20px] border-2 border-[#4bc5fa] bg-white px-2.5 py-3"
            action=""
          >
            <div className="hover:border-879ba6 max-w-5.75 cursor-pointer rounded-[100%] border-2 border-[#879ba6] transition hover:bg-gray-400 active:scale-95">
              <X className="h-4.75 max-w-4.75 text-[#879ba6] hover:text-white" />
            </div>
            <input
              className="w-full max-w-107.5 border-none text-sm text-[#4f636f] outline-none placeholder:text-[13px]"
              type="text"
              placeholder="Привет, Крош! Как построить самую быструю ракету?"
            />
            <div className="h-9 max-w-9 cursor-pointer rounded-2xl bg-[#4bc5fa] px-1.25 py-1.25 transition hover:bg-[#0ea3e3] active:scale-95">
              <ArrowRight className="fill-white text-white" />
            </div>
          </form>
        </div>

        <div className="h-70 w-70 shrink-0 overflow-hidden rounded-full border-4 border-white/60 shadow-inner">
          <Image
            className="h-full w-full object-cover"
            src="/smeshariki-preview-2.jpg"
            alt="preview-image"
            width={280}
            height={280}
          />
        </div>
      </div>
    </article>
  );
};

export default HeroCard;
