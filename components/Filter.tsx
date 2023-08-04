"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type FilterProps = {
  label: String;
  filter: string[] | number[];
};

export default function Filter({ label, filter }: FilterProps) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex w-full justify-center font-xl text-black bg-wfill rounded select-none cursor-pointer"
      >
        <h2>{label}</h2>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl overflow-auto transform border border-wstroke rounded bg-wwhite p-6 text-left align-middle shadow-md transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold text-gray-900"
                  >
                    {label}
                  </Dialog.Title>
                  {/* {filter.map((item) => (
                    <p key={item}>{item}</p>
                  ))} */}

                  <div className="flex flex-wrap gap-1 accent-wbg select-none">
                    {filter.map((item: any) => (
                      <label
                        key={item}
                        className="group outline outline-1 outline-black py-3 px-2 text-wwhite bg-blue-500 hover:bg-blue-600 has-[:checked]:bg-blue-600"
                      >
                        <input className="group" type="checkbox" />{" "}
                        {item}
                      </label>
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-wbg bg-wbar px-4 py-2 text-sm font-bold text-wwhite hover:bg-wbg"
                      onClick={() => setIsOpen(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
