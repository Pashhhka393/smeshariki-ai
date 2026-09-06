import Link from "next/link";
import ChooseCharacter from "./ChooseCharacter";
import { Code2, Rocket } from "lucide-react";

const CharactersCard = () => {
  return (
    <>
      <div className="col-span-7 flex flex-col justify-between gap-6">
        <article className="rounded-4xl border-[1.50px] border-white bg-white/45 px-6 py-6 shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] backdrop-blur-xl">
          <header className="mb-5">
            <div className="flex items-center justify-between">
              <h1 className="text-[20px] font-extrabold text-[#1c252c]">
                Выбери собеседника
              </h1>
              <Link
                className="text-[13px] font-semibold text-[#4bc5fa] transition hover:text-[#2babe2]"
                href="/characters"
              >
                Всего 6 героев →
              </Link>
            </div>
          </header>

          <div className="grid grid-cols-2 gap-3.75">
            <ChooseCharacter isActive />
            <ChooseCharacter />
            <ChooseCharacter />
            <ChooseCharacter />
            <ChooseCharacter />
            <ChooseCharacter />
          </div>
        </article>

        <div className="grid grid-cols-2 gap-6">
          <article className="flex h-37.5 items-center justify-between rounded-4xl border-[1.50px] border-white bg-white/45 px-6 py-5 shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] backdrop-blur-xl">
            <div>
              <h2 className="mb-1 text-[24px] leading-tight font-extrabold text-[#4bc5fa]">
                Next.js + AI
              </h2>
              <p className="max-w-52.5 text-[12px] leading-snug text-[#4f636f]">
                React 19, TypeScript, Tailwind CSS, GigaChat API
              </p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100/80 text-[#4bc5fa] shadow-xs">
              <Code2 className="h-7 w-7" />
            </div>
          </article>

          {/* Прикрутить клик! */}
          <article className="flex h-37.5 cursor-pointer items-center justify-between rounded-4xl bg-[#4bc5fa] px-6 py-5 shadow-[0_12px_24px_0_rgba(75,197,250,0.4)] transition-all hover:bg-[#23bafb]">
            <div className="text-white">
              <h2 className="mb-1 text-[22px] leading-tight font-black">
                Начать общение
              </h2>
              <p className="max-w-40 text-[11px] leading-tight text-white/90">
                Каждый герой обладает нейросетевой специализацией
              </p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#4bc5fa] shadow-md">
              <Rocket className="h-7 w-7" />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default CharactersCard;
