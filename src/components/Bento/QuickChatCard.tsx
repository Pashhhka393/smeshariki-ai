import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const QuickChatCard = () => {
  return (
    <article className="col-span-5 flex h-130 flex-col justify-between rounded-4xl border-[1.50px] border-white bg-white/45 px-5 py-5 shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] backdrop-blur-xl">
      <header>
        <div className="flex items-center gap-1.5">
          <div className="h-9 w-9 cursor-pointer">
            <Image
              className="h-full w-full rounded-full object-cover"
              src="/smeshariki/krosh.jpg"
              alt="smesharik-image"
              width={36}
              height={36}
            />
          </div>
          <h2 className="text-[18px] font-extrabold">Крош AI</h2>
        </div>
      </header>

      <div className="mt-6 flex w-full flex-1 scrollbar-thin flex-col gap-4 overflow-y-auto pr-2">
        <div className="ml-auto w-fit self-end rounded-xl bg-[#4bc5fa] px-4 py-3 text-[14px] leading-[140%] text-white">
          Крош, привет! Посоветуй, чем заняться в эти выходные?
        </div>
        <div className="flex items-start gap-1.5">
          <Image
            className="cursor-pointer rounded-full"
            src="/smeshariki/krosh.jpg"
            alt="smesharik-image"
            width={36}
            height={36}
          />
          <div className="mr-auto w-fit self-start rounded-[20px] bg-[#7bd082] px-4 py-3">
            <h2 className="mb-2.5 text-[12px] font-bold whitespace-nowrap text-white">
              Крош
            </h2>
            <p className="text-[14px] leading-[140%] text-white">
              Ёлки-иголки! Конечно же прыгать выше солнца! Мы с Ёжиком устроим
              мега-турнир по скоростному катанию на морковках! Хочешь с нами?
            </p>
          </div>
        </div>
      </div>
      <form
        className="z-10 mt-5 flex w-full items-center justify-between rounded-[20px] bg-white px-3.75 py-2.5"
        action=""
      >
        <input
          className="flex-1 border-none text-[#879ba6] outline-none"
          placeholder="Напиши Крошу что-нибудь..."
          type="text"
        />
        <div className="w-fit cursor-pointer rounded-full bg-[#4bc5fa] px-3.25 py-2.5 transition hover:bg-[#23bafb] active:scale-95">
          <ArrowUpRight className="w-3.75 text-white" />
        </div>
      </form>
    </article>
  );
};

export default QuickChatCard;
