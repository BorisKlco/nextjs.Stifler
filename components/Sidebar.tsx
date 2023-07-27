"use client";
import Image from "next/image";
import Filter from "./Filter";
import React, { useState } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Sidebar() {
  const [filter, setFilter] = useState(false);

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
          </div>
          <div className="flex flex-col pt-4 gap-2">
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
            <Filter label="Host" />
            <Filter label="Method" />
            <Filter label="URI" />
            <Filter label="Referer" />
          </div>
        </div>
      </div>
    </div>
  );
}
