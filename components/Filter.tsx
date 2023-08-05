"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Modal from "./Modal";

type FilterProps = {
  label: String;
  filter: string[];
};

export default function Filter({ label, filter }: FilterProps) {
  let [isOpen, setIsOpen] = useState(false);
  let [filterValue, setFilterValue] = useState<string[]>([]);

  const handleCheckboxChange = (event: any) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterValue((prevCheckedItems) => [...prevCheckedItems, value]);
    } else {
      setFilterValue((prevCheckedItems) =>
        prevCheckedItems.filter((item) => item !== value)
      );
    }
    console.log(filterValue);
  };

  const selectAll = () => {
    setFilterValue([...filter]);
  };

  const selectNone = () => {
    setFilterValue([]);
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex w-full justify-center font-xl text-black bg-wfill rounded select-none cursor-pointer"
      >
        <h2>{label}</h2>
      </div>

      <Modal title={label} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="">
          <div className="flex gap-4 items-center">
            <h1 className="font-bold">Select: </h1>
            <button className="my-2 hover:underline" onClick={selectAll}>
              All
            </button>
            <button className="my-2 hover:underline" onClick={selectNone}>
              None
            </button>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 accent-wbg select-none my-2 justify-center">
            {filter.sort().map((item: any) => (
              <label
                key={item}
                className="rounded-md w-[10rem] outline outline-1 outline-black py-3 px-2 text-wwhite bg-blue-500 hover:bg-blue-600 has-[:checked]:bg-blue-600"
              >
                <input
                  checked={filterValue.includes(item)}
                  onChange={handleCheckboxChange}
                  className="group"
                  type="checkbox"
                  id={item}
                  value={item}
                />{" "}
                {item}
              </label>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
