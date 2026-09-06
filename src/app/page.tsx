import ChooseCharacter from "@/components/Bento/ChooseCharacter";
import HeroCard from "@/components/Bento/HeroCard";
import QuickChatCard from "@/components/Bento/QuickChatCard";
import QuickStartCard from "@/components/Bento/QuickStartCard.tsx";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <section className="mt-8 grid grid-cols-12 gap-6 pb-8">
        <HeroCard />
        <QuickStartCard />
        <QuickChatCard />
        <div className="col-span-7 flex flex-col justify-between gap-6">
          <article className="rounded-4xl border-[1.50px] border-white bg-white/45 px-5 py-5 shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] backdrop-blur-xl">
            <header className="mb-5">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px] font-extrabold text-[#1c252c]">
                  Выбери собеседника
                </h1>
                <Link
                  className="text-[13px] font-semibold text-[#4bc5fa] transition hover:text-[#2babe2]"
                  href=""
                >
                  Всего 9 героев →
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
          <div>
            <article></article>
            <article></article>
          </div>
        </div>
      </section>
    </main>
  );
}
