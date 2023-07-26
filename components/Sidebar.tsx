"use client";
import { ReactNode } from "react";
import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import Image from "next/image";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Sidebar({ children }: { children: ReactNode }) {
  const [value, onChange] = useState<Value>([new Date(), new Date()]);
  const [filter, setFilter] = useState(false);

  return (
    <div className="w-[300px] h-full bg-wbar border-r-2 border-wstroke overflow-hidden">
      <div className="flex flex-col px-6">
        <div>
          <div className="flex justify-between pt-4 font-bold text-2xl text-wwhite">
            <h1 className="drop-shadow-[0px_0px_1px_rgba(0,0,0)]">Calendar:</h1>
            <button className="select-none">All</button>
          </div>
          <DateRangePicker className="my-3" onChange={onChange} value={value} />
        </div>
        <div className="flex justify-between items-center pt-4 font-bold text-2xl text-wwhite ">
          <h1 className="drop-shadow-[0px_0px_1px_rgba(0,0,0)]">Filters:</h1>
          <button onClick={() => setFilter(!filter)}>
            <Image
              src={
                filter
                  ? "/images/bars/toggle-on.svg"
                  : "/images/bars/toggle-off.svg"
              }
              height={72}
              width={72}
              className="object-contain select-none"
              alt="toggle"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
