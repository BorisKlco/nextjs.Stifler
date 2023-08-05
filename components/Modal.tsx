"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type ModalProps = {
  title: String;
  children: React.ReactNode;
  isOpen: boolean | undefined;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Modal({
  title,
  children,
  isOpen,
  setIsOpen,
}: ModalProps) {
  return (
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
              <Dialog.Panel className="w-full max-w-4xl overflow-auto transform border border-wstroke rounded-md bg-wwhite p-6 text-left align-middle shadow-md transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-3xl mb-2 font-bold text-gray-900"
                >
                  {title}
                </Dialog.Title>
                {children}

                <div className="mt-6 text-center">
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
  );
}
