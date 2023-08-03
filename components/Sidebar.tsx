"use client";
import Image from "next/image";
import Filter from "./Filter";
import React, { ReactNode } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import useFilter from "@/hooks/useFilter";

type DateType = string | null | Date;
type DateRangeType = {
  startDate: DateType;
  endDate: DateType;
} | null;

type DateValueType = DateRangeType | null;

export default function Sidebar({ children }: { children: ReactNode }) {
  const filter = useFilter((store) => store.test);
  const setFilter = useFilter((store) => store.setTest);
  const dateFilter = useFilter((store) => store.dateFilter);
  const setDateFilter = useFilter((store) => store.setDateFilter);

  const handleValueChange = (newDate: DateValueType) => {
    console.log("newValue:", newDate);
    setDateFilter(newDate);
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
            </div>

            <Datepicker
              containerClassName="relative mt-4"
              useRange={false}
              value={dateFilter}
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
