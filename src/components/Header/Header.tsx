import Image from "next/image";

const Header = () => {
  return (
    <header className="mt-10">
      <div className="container max-w-7xl mx-auto">
        <div className="header-logo bg-white/50 border border-white backdrop-blur-md  rounded-3xl">
          <div className="flex items-center gap-2.5 py-5 px-5">
            <Image
              className="cursor-pointer object-contain"
              src="/kgpk.png"
              alt="logo-college"
              width={100}
              height={50}
            />
            <p className="font-extrabold text-[#1c252c] text-2xl cursor-pointer">
              Смешарики<span className="text-[#4bc5fa]">.AI</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
