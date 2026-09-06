import Image from "next/image";
import { ArrowRight, Sparkles, X } from "lucide-react";

const HeroCard = () => {
  return (
    <article className="col-span-1 rounded-4xl border-[1.50px] border-white bg-white/45 px-6 py-8 shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] backdrop-blur-xl lg:col-span-8 lg:px-10 lg:py-10">
      <div className="mb-4 flex max-w-47.5 items-center gap-1.5 rounded-[100px] bg-[#e1f5fe] px-1.5 py-1.5">
        <Sparkles className="h-5 shrink-0 fill-amber-300 text-amber-200" />
        <span className="text-[12px] font-bold whitespace-nowrap text-[#4bc5fa]">
          Твой новый умный друг
        </span>
      </div>

      <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:gap-8">
        <div className="w-full flex-1">
          <h1 className="my-3 text-3xl leading-[118%] font-extrabold text-[#1c252c] lg:text-[46px]">
            Смешарики AI Ассистент
          </h1>
          <p className="my-3 text-sm leading-[144%] text-[#4f636f] lg:text-[18px]">
            Общайся с любимыми круглыми героями! Задавай вопросы по урокам
            Лосяшу, сочиняй стихи с Барашем или просто болтай с Крошем
          </p>

          <form
            className="flex w-full max-w-135 items-center gap-1.5 rounded-[20px] border-2 border-[#4bc5fa] bg-white px-2.5 py-3 shadow-sm"
            action=""
          >
            <div className="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-[#879ba6] transition hover:border-[#879ba6] hover:bg-gray-400 active:scale-95">
              <X className="h-3.5 w-3.5 text-[#879ba6] hover:text-white" />
            </div>
            <input
              className="flex-1 border-none bg-transparent text-sm text-[#4f636f] outline-none placeholder:text-[13px]"
              type="text"
              placeholder="Привет, Крош! Как построить самую быструю ракету?"
            />
            <div className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-2xl bg-[#4bc5fa] transition hover:bg-[#0ea3e3] active:scale-95">
              <ArrowRight className="h-5 w-5 fill-white text-white" />
            </div>
          </form>
        </div>

        <div className="h-48 w-48 shrink-0 overflow-hidden rounded-full border-4 border-white/60 shadow-inner lg:h-70 lg:w-70">
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
