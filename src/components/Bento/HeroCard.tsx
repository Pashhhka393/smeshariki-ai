import Image from "next/image";
import { ArrowRight, Sparkles, X } from "lucide-react";

const HeroCard = () => {
  return (
    <article className="col-span-1 rounded-4xl border-[1.50px] border-white bg-white/45 px-6 py-8 shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] backdrop-blur-xl lg:col-span-8 lg:px-10 lg:py-10">
      <div className="mb-4 flex w-fit items-center gap-1.5 rounded-[100px] bg-[#e1f5fe] px-1.5 py-1.5">
        <Sparkles className="h-5 shrink-0 fill-amber-300 text-amber-200" />
        <span className="text-[14px] font-bold whitespace-nowrap text-[#4bc5fa]">
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
