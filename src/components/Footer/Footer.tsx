import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto py-8 px-4 text-[#879ba6] text-[13px] text-center border-t border-white mt-12">
      <p className="mb-1.5">
        © 2026{" "}
        <span className="font-semibold text-[#4bc5fa]">Смешарики.AI</span>.
        Разработано с любовью студентом группы <span>ИС-22</span> -
        <Link
          href="https://github.com/Pashhhka393"
          target="_blank"
          rel="noopener noreferrer"
          className=" font-bold hover:text-[#4bc5fa] transition-colors underline ml-1"
        >
          Павел Шевелюхин
        </Link>
      </p>
      <p className="text-[11px] text-[#879ba6]/80 flex items-center justify-center gap-2">
        <span>Next.js</span> • <span>TypeScript</span> •
        <span>Tailwind CSS</span> • <span>GigaChat API</span>
      </p>
    </footer>
  );
};

export default Footer;
