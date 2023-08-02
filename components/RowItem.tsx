"use client";
import moment from "moment";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function RowItem({ props }: any) {
  const objAsText = JSON.stringify(props, null, 2);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const logDate = moment.unix(props.ts).format("YYYY-MM-DD HH:mm:ss.SSS");
  return (
    <>
      <tr
        onClick={openModal}
        className="bg-blue-600 border-b border-blue-400 cursor-pointer text-wfill hover:text-wwhite"
      >
        <th className="px-6 py-4 truncate bg-blue-500 max-w-[8rem]">
          {logDate}
        </th>
        <td className="px-6 py-4 truncate max-w-[6rem]">
          {props.request.remote_ip}
        </td>
        <td className="px-6 py-4 truncate bg-blue-500 max-w-[12rem]">{`${props.request.method}, ${props.request.uri}`}</td>
        <td className="px-6 py-4 truncate max-w-[8rem]">
          {props.request.headers["User-Agent"]}
        </td>
        <td className="px-6 py-4 truncate bg-blue-500 max-w-[8rem]">
          {props.request.headers["Referer"]}
        </td>
      </tr>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel
                  className="
                
                w-full max-w-4xl overflow-auto transform border border-wstroke rounded bg-wwhite p-6 text-left align-middle shadow-md transition-all"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold text-gray-900"
                  >
                    {logDate}
                  </Dialog.Title>
                  <pre className="mt-4">{objAsText}</pre>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-wbg bg-wbar px-4 py-2 text-sm font-bold text-wwhite hover:bg-wbg"
                      onClick={closeModal}
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
// import moment from "moment";

// type RowItemProps = {
//   date: number;
//   ip: string;
//   method: string;
//   agent: string;
// };

// export default function RowItem({ date, ip, method, agent }: RowItemProps) {
//   const logDate = moment.unix(date).format("YYYY-MM-DD HH:mm:ss.SSS");
//   return (
//     <tr className="bg-blue-600 border-b border-blue-400">
//       <th className="px-6 py-4 truncate bg-blue-500 max-w-[8rem]">{logDate}</th>
//       <td className="px-6 py-4 truncate max-w-[6rem]">{ip}</td>
//       <td className="px-6 py-4 truncate bg-blue-500 max-w-[12rem]">{method}</td>
//       <td className="px-6 py-4 truncate max-w-[8rem]">{agent}</td>
//       <td className="px-6 py-4 truncate bg-blue-500">Item</td>
//     </tr>
//   );
// }
