import CharactersCard from "@/components/Bento/Character/CharactersCard";
import HeroCard from "@/components/Bento/HeroCard";
import QuickChatCard from "@/components/Bento/QuickChatCard";
import QuickStartCard from "@/components/Bento/QuickStartCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <section className="mt-8 grid grid-cols-1 gap-6 px-4 pb-8 lg:grid-cols-12">
        <HeroCard />
        <QuickStartCard />
        <QuickChatCard />
        <CharactersCard />
      </section>
    </main>
  );
}
