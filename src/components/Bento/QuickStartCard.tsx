import { Compass } from "lucide-react";

const quickPrompts = [
  {
    id: "code",
    label: "Лабы в КГПК",
    emoji: "💻",
    prompt:
      "Лосяш, помоги мне с лабораторной работой! Объясни простыми словами тему, которую нам сегодня задали в КГПК, чтобы даже Крош понял!",
  },
  {
    id: "project",
    label: "Тема для проекта",
    emoji: "🚀",
    prompt:
      "Крош, придумай самую безумную и гениальную идею для защиты проекта, с которым мы сможем получить максимальное количество баллов!",
  },
  {
    id: "poem",
    label: "Стих про сессию",
    emoji: "✍️",
    prompt:
      "Бараш, сочини красивое и грустное стихотворение про приближающуюся сессию в колледже КГПК.",
  },
  {
    id: "lifehack",
    label: "Совет студенту",
    emoji: "🛠️",
    prompt:
      "Копатыч, дай мудрый совет студенту КГПК: как не выгореть на парах, всё успеть и стать настоящим мастером своего дела!",
  },
];

const QuickStartCard = () => {
  return (
    <article className="col-span-1 rounded-4xl border-[1.50px] border-white bg-white/45 px-10 py-10 shadow-[0_16px_32px_0_rgba(75,197,250,0.08)] backdrop-blur-xl lg:col-span-4">
      <div className="mb-5 flex items-center justify-between">
        <Compass className="h-12 w-12 fill-yellow-300 text-white" />
        <p className="w-full max-w-30 rounded-[100px] bg-[#fffde7] px-3 py-1.5 text-[10px] font-bold text-[#b78103] uppercase">
          Быстрый старт
        </p>
      </div>
      <div>
        <h1 className="text-[26px] font-extrabold text-[#1c252c]">
          О чём спросить ИИ?
        </h1>
        <p className="mt-2.5 mb-5 max-w-100 text-[14px] leading-[143%] text-[#4f636f]">
          Выбери готовую тему, чтобы проверить способности наших круглых
          ассистентов
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {quickPrompts.map((item) => (
          <button
            key={item.id}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-white bg-white/70 px-4 py-2.5 text-[13px] font-bold text-[#4f636f] shadow-xs transition-all hover:border-[#4bc5fa] hover:bg-white hover:text-[#4bc5fa] active:scale-95"
            type="button"
          >
            <span>{item.emoji} </span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </article>
  );
};

export default QuickStartCard;
