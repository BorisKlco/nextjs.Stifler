import Image from "next/image";
import { PiGithubLogoDuotone } from "react-icons/pi";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full h-[100px] bg-wbar px-6 border-b border-wstroke select-none">
      <div className="flex items-center">
        <Image
          src="/images/bars/logo.svg"
          height={64}
          width={64}
          className="object-fit "
          alt="logo"
        />
        <h1 className="text-5xl font-bold text-wwhite drop-shadow-[0px_0px_1px_rgba(0,0,0)]">
          Stifler
        </h1>
      </div>
      <div className="hidden sm:flex items-center">
        <div className="text-wwhite transition hover:scale-125 cursor-pointer">
          <PiGithubLogoDuotone size={48} />
        </div>
      </div>
    </div>
  );
}
