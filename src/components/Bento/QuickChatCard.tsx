import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const QuickChatCard = () => {
  return (
    <article className="flex flex-col justify-between h-130 col-span-5 border-[1.50px] py-5 px-5 border-white rounded-4xl backdrop-blur-xl shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] bg-white/45">
      <header>
        <div className="flex items-center gap-1.5">
          <div className="w-9 h-9 cursor-pointer">
            <Image
              className="w-full h-full object-cover rounded-full"
              src="/smeshariki/krosh.jpg"
              alt="smesharik-image"
              width={36}
              height={36}
            />
          </div>
          <h2 className="font-extrabold text-[18px]">Крош AI</h2>
        </div>
      </header>

      <div className="flex flex-col gap-4 mt-6 w-full overflow-y-auto flex-1 pr-2 scrollbar-thin">
        <div className="bg-[#4bc5fa] rounded-xl text-white leading-[140%] text-[14px] py-3 px-4 ml-auto self-end w-fit">
          Крош, привет! Посоветуй, чем заняться в эти выходные?
        </div>
        <div className="flex items-start gap-1.5">
          <Image
            className="rounded-full cursor-pointer"
            src="/smeshariki/krosh.jpg"
            alt="smesharik-image"
            width={36}
            height={36}
          />
          <div className="bg-[#7bd082] rounded-[20px] py-3 px-4 w-fit mr-auto self-start">
            <h2 className="text-[12px] font-bold text-white mb-2.5 whitespace-nowrap">
              Крош
            </h2>
            <p className="text-white leading-[140%] text-[14px]">
              Ёлки-иголки! Конечно же прыгать выше солнца! Мы с Ёжиком устроим
              мега-турнир по скоростному катанию на морковках! Хочешь с нами?
            </p>
          </div>
        </div>
      </div>
      <form
        className="mt-5 z-10 bg-white w-full flex items-center justify-between rounded-[20px] px-3.75 py-2.5"
        action=""
      >
        <input
          className="flex-1 border-none outline-none text-[#879ba6] "
          placeholder="Напиши Крошу что-нибудь..."
          type="text"
        />
        <div className="bg-[#4bc5fa] rounded-full w-fit py-2.5 px-3.25 cursor-pointer hover:bg-[#23bafb] active:scale-95 transition">
          <ArrowUpRight className="text-white w-3.75" />
        </div>
      </form>
    </article>
  );
};

export default QuickChatCard;
