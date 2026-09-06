import Image from "next/image";

interface ChooseCharacterProps {
  isActive?: boolean;
}

const ChooseCharacter = ({ isActive }: ChooseCharacterProps) => {
  return (
    <div
      className={`cursor-pointer rounded-[20px] px-2 py-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all active:scale-98 ${
        isActive
          ? "border border-[#4bc5fa] bg-white"
          : "border border-transparent bg-white/30 hover:bg-white/60"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full">
          <Image
            className="h-full w-full object-cover"
            src="/smeshariki/krosh.jpg"
            alt="smesharik-image"
            width={44}
            height={44}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-1">
            <h2 className="text-sm font-bold text-[#1c252c]">Крош</h2>
            <span className="shrink-0 rounded-[10px] bg-[rgba(75,197,250,0.2)] px-2 py-0.5 text-[10px] font-semibold text-[#1c252c]">
              Энергия
            </span>
          </div>
          <p className="mt-0.5 truncate text-[12px] leading-[140%] text-[#4f636f]">
            Всегда готов к весёлым играм, спорту и безумным идеям!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCharacter;
