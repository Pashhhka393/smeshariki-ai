import Image from "next/image";

const Header = () => {
  return (
    <header className="px-2.5 mt-2.5 lg:mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/50 border border-white backdrop-blur-md  rounded-3xl">
          <div className="max-w-50 cursor-pointer">
            <div className="flex items-center gap-2.5 py-5 px-5">
              <Image
                className="object-contain"
                src="/kgpk.png"
                alt="logo-college"
                width={100}
                height={50}
              />
              <p className="font-extrabold text-[#1c252c] text-2xl  ">
                Смешарики<span className="text-[#4bc5fa]">.AI</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
