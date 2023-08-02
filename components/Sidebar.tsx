"use client";
import Image from "next/image";
import Filter from "./Filter";
import React, { ReactNode, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { DateRangeType } from "react-tailwindcss-datepicker/dist/types";

export default function Sidebar({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState(false);
  const [value, setValue] = useState<DateRangeType>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="flex h-full">
      <div className="hidden xl:flex min-w-[300px] h-full bg-wbar border-r border-wstroke">
        <div className="flex flex-col px-6 w-full">
          <div className="">
            <div className="flex justify-between pt-4 font-bold text-2xl text-wwhite">
              <h1 className="drop-shadow-[0px_0px_1px_rgba(0,0,0)]">
                Calendar:
              </h1>
              <button className="select-none">All</button>
            </div>

            <Datepicker
              containerClassName="relative mt-4"
              useRange={false}
              value={value}
              onChange={handleValueChange}
            />
          </div>
          <div className="flex flex-col pt-4 gap-3">
            <div className="flex justify-between items-center font-bold text-2xl text-wwhite ">
              <h1 className="drop-shadow-[0px_0px_1px_rgba(0,0,0)]">
                Filters:
              </h1>
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
            <Filter label="IP Range" />
            <Filter label="Referer" />
          </div>
        </div>
      </div>
      <section className="w-full ">{children}</section>
    </div>
  );
}
