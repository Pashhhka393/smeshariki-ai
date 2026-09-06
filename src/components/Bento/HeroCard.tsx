import Image from "next/image";
import { ArrowRight, Sparkles, X } from "lucide-react";

const HeroCard = () => {
  return (
    <article className="py-10 px-10 col-span-8 border-[1.50px] border-white rounded-4xl backdrop-blur-xl shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] bg-white/45">
      <div className="flex items-center gap-1.5 max-w-47.5 bg-[#e1f5fe] py-1.5 px-1.5 rounded-[100px]">
        <Sparkles className="text-amber-200 fill-amber-300 h-5" />
        <span className="text-[#4bc5fa] text-[12px] font-bold">
          Твой новый умный друг
        </span>
      </div>

      <div className="flex items-center gap-5 ">
        <div>
          <h1 className="max-w-87.5 my-5 text-[#1c252c] font-extrabold text-[46px] leading-[118%]">
            Смешарики AI Ассистент
          </h1>
          <p className="max-w-107.5 my-5 text-[#4f636f] text-[18px] leading-[144%]">
            Общайся с любимыми круглыми героями! Задавай вопросы по урокам
            Лосяшу, сочиняй стихи с Барашем или просто болтай с Крошем.
          </p>
          <form
            className="w-full max-w-135 flex items-center gap-1.5 border-2 py-3 px-2.5 rounded-[20px] border-[#4bc5fa] bg-white"
            action=""
          >
            <div className="border-2 max-w-5.75 border-[#879ba6] rounded-[100%] cursor-pointer hover:bg-gray-400 active:scale-95 hover:border-879ba6 transition">
              <X className="text-[#879ba6] hover:text-white max-w-4.75 h-4.75" />
            </div>
            <input
              className="w-full max-w-107.5 border-none outline-none text-[#4f636f] text-sm placeholder:text-[13px]"
              type="text"
              placeholder="Привет, Крош! Как построить самую быструю ракету?"
            />
            <div className="max-w-9 h-9 bg-[#4bc5fa] px-1.25 py-1.25 rounded-2xl cursor-pointer hover:bg-[#0ea3e3] active:scale-95 transition">
              <ArrowRight className="text-white fill-white" />
            </div>
          </form>
        </div>

        <div className="w-70 h-70 rounded-full overflow-hidden shrink-0 border-4 border-white/60 shadow-inner">
          <Image
            className="w-full h-full object-cover"
            src="/smeshariki-preview.jpg"
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
