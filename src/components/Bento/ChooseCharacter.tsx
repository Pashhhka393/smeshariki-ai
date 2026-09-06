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
          : "border border-transparent bg-white/30 hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <Image
          className="shrink-0 cursor-pointer rounded-full"
          src="/smeshariki/krosh.jpg"
          alt="smesharik-image"
          width={44}
          height={44}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[#1c252c]">Крош</h2>
            <span className="mb-1.5 flex w-fit justify-center rounded-[10px] bg-[rgba(75,197,250,0.2)] px-2 py-0.5 text-[10px] font-semibold text-[#1c252c]">
              Энергия
            </span>
          </div>
          <p className="truncate text-[12px] leading-[140%] text-[#4f636f]">
            Всегда готов к весёлым играм, спорту и безумным идеям!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCharacter;
