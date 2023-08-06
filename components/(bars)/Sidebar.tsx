"use client";
import Image from "next/image";
import Filter from "../Filter";
import React, { ReactNode } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import useFilter from "@/hooks/useFilter";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";

export default function Sidebar({
  children,
  ip,
  status,
}: {
  children: ReactNode;
  ip: string[];
  status: string[];
}) {
  const enableFilter = useFilter((store) => store.enableFilter);
  const setEnableFilter = useFilter((store) => store.setEnableFilter);
  const dateFilter = useFilter((store) => store.dateFilter);
  const setDateFilter = useFilter((store) => store.setDateFilter);

  const filterIP = useFilter((store) => store.ip);
  const setFilterIP = useFilter((store) => store.setIP);

  const filterStatus = useFilter((store) => store.status);
  const setFilterStatus = useFilter((store) => store.setStatus);

  const handleValueChange = (newDate: DateValueType | null) => {
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
              <button onClick={() => setEnableFilter(!enableFilter)}>
                <Image
                  src={
                    enableFilter
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
            <Filter
              label="IP's"
              store={filterIP}
              setStore={setFilterIP}
              filter={ip}
            />
            <Filter
              label="Status"
              store={filterStatus}
              setStore={setFilterStatus}
              filter={status}
            />
          </div>
        </div>
      </div>
      <section className="w-full ">{children}</section>
    </div>
  );
}
