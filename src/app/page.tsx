import HeroCard from "@/components/Bento/HeroCard";
import { Compass } from "lucide-react";
import Image from "next/image";

const quickPrompts = [
  {
    id: "code",
    label: "Массивы в JS",
    emoji: "💻",
    prompt:
      "Лосяш, объясни простыми словами, как работает массив в JavaScript и как перебрать его элементы!",
  },
  {
    id: "startup",
    label: "Идея стартапа",
    emoji: "🚀",
    prompt:
      "Крош, придумай безумную и взрывную идею для айти-стартапа студентов!",
  },
  {
    id: "poem",
    label: "Стих про сессию",
    emoji: "✍️",
    prompt:
      "Бараш, сочини красивое и грустное стихотворение про приближающуюся сессию в колледже КГПК.",
  },
  {
    id: "debug",
    label: "Починить код",
    emoji: "🛠️",
    prompt:
      "Копатыч, как успокоить нервы и найти ошибку в коде, если компилятор ругается?",
  },
];

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <section className="mt-8 grid grid-cols-12 gap-6">
        <HeroCard />
        <article className="py-10 px-10 col-span-4 border-[1.50px] border-white rounded-4xl backdrop-blur-xl shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] bg-white/45">
          <div className="flex items-center justify-between  mb-5 ">
            <Compass className="w-12 h-12 fill-yellow-300 text-white" />
            <p className="w-full max-w-27.5 text-[#b78103] text-[11px] font-bold bg-[#fffde7] py-1.5 px-3 rounded-[100px]">
              Быстрый старт
            </p>
          </div>
          <div>
            <h1 className="text-[#1c252c] font-extrabold text-[26px]">
              О чём спросить ИИ?
            </h1>
            <p className="max-w-100 text-[#4f636f] leading-[143%] text-[14px] mt-2.5 mb-5">
              Выбери готовую тему, чтобы проверить способности наших круглых
              ассистентов
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {quickPrompts.map((item) => (
              <button
                key={item.id}
                className="w-full flex items-center justify-center gap-2 bg-white/70 hover:bg-white hover:border-[#4bc5fa] hover:text-[#4bc5fa] text-[#4f636f] text-[13px] font-bold py-2.5 px-4 rounded-2xl border border-white shadow-xs transition-all active:scale-95 cursor-pointer"
                type="button"
              >
                <span>{item.emoji} </span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
