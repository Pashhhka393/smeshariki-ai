import Image from "next/image";

interface ChooseCharacterProps {
  isActive?: boolean;
}

const ChooseCharacter = ({ isActive }: ChooseCharacterProps) => {
  return (
    <div
      className={`rounded-[20px] px-2 py-2.5 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all active:scale-98 ${
        isActive
          ? "bg-white border border-[#4bc5fa]"
          : "bg-white/30 border border-transparent hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <Image
          className="rounded-full cursor-pointer shrink-0"
          src="/smeshariki/krosh.jpg"
          alt="smesharik-image"
          width={44}
          height={44}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-[#1c252c] font-bold">Крош</h2>
            <span className="w-fit flex justify-center mb-1.5 text-[#1c252c] text-[10px] font-semibold bg-[rgba(75,197,250,0.2)] py-0.5 px-2 rounded-[10px]">
              Энергия
            </span>
          </div>
          <p className="text-[#4f636f] truncate text-[12px] leading-[140%]">
            Всегда готов к весёлым играм, спорту и безумным идеям!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCharacter;
