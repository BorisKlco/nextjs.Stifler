import { ReactNode } from "react";

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="w-[300px] h-full bg-wbar border-r-2 border-wstroke overflow-hidden">
      <div className="flex flex-col px-6">
        <div>
          <div className="flex justify-between pt-4 font-bold text-2xl text-wwhite">
            <h1 className="drop-shadow-[0px_0px_1px_rgba(0,0,0)]">Calendar:</h1>
            <button>All</button>
          </div>
        </div>
        <div className="flex justify-between pt-4 font-bold text-2xl text-wwhite ">
          <h1 className="drop-shadow-[0px_0px_1px_rgba(0,0,0)]">Filters:</h1>
          <button>img</button>
        </div>
      </div>
    </div>
  );
}
