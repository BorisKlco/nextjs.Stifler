"use client";
import { useState } from "react";
import Modal from "./Modal";

type FilterProps = {
  label: String;
  store: String[];
  setStore: (store: String[]) => void;
  filter: string[];
};

export default function Filter({
  label,
  store,
  setStore,
  filter,
}: FilterProps) {
  let [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (event: any) => {
    const { value, checked } = event.target;
    if (checked) {
      const checkNewValue = [...store, value];
      setStore([...checkNewValue]);
    } else {
      const removeValue = store.filter((item) => item !== value);
      setStore([...removeValue]);
    }
  };

  const selectAll = () => {
    setStore([...filter]);
  };

  const selectNone = () => {
    setStore([]);
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
                  checked={store.includes(item)}
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
