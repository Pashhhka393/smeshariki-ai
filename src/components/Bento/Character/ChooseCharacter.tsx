import Image from "next/image";

interface ChooseCharacterProps {
  name: string;
  avatarImg: string;
  description: string;
  keyWord: string;
}

const keyWordColors: Record<string, string> = {
  Энергия: "bg-[rgba(75,197,250,0.2)]",
  Мода: "bg-[rgba(253,158,194,0.2)]",
  Логика: "bg-[rgba(179,157,219,0.2)]",
  Наука: "bg-[rgba(255,210,77,0.2)]",
  Природа: "bg-[rgba(255,171,145,0.2)]",
  Поэзия: "bg-[rgba(252,228,236,0.2)]",
};

const ChooseCharacter = ({
  name,
  avatarImg,
  description,
  keyWord,
}: ChooseCharacterProps) => {
  const currentBadgeColor = keyWordColors[keyWord] || "bg-white/30";

  return (
    <div className="cursor-pointer rounded-[20px] border border-transparent bg-white/30 px-2 py-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all hover:bg-white/60 active:scale-98">
      <div className="flex items-center gap-2.5">
        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full">
          <Image
            className="h-full w-full object-cover"
            src={avatarImg}
            alt="smesharik-image"
            width={44}
            height={44}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-1">
            <h2 className="text-sm font-bold text-[#1c252c]">{name}</h2>
            <span
              className={`shrink-0 rounded-[10px] px-2 py-0.5 text-[10px] font-semibold text-[#1c252c] ${currentBadgeColor}`}
            >
              {keyWord}
            </span>
          </div>
          <p className="mt-0.5 truncate text-[12px] leading-[140%] text-[#4f636f]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCharacter;
