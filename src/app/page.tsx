import HeroCard from "@/components/Bento/HeroCard";
import QuickChatCard from "@/components/Bento/QuickChatCard";
import QuickStartCard from "@/components/Bento/QuickStartCard.tsx";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <section className="mt-8 pb-8 grid grid-cols-12 gap-6">
        <HeroCard />
        <QuickStartCard />
        <QuickChatCard />
      </section>
    </main>
  );
}
