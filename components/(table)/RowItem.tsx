"use client";
import moment from "moment";
import { useState } from "react";
import Modal from "../Modal";

export default function RowItem({ props }: any) {
  const objAsText = JSON.stringify(props, null, 2);
  let [isOpen, setIsOpen] = useState(false);

  const logDate = moment.unix(props.ts).format("YYYY-MM-DD HH:mm:ss.SSS");
  return (
    <>
      <tr
        onClick={() => setIsOpen(true)}
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

      <Modal title={logDate} isOpen={isOpen} setIsOpen={setIsOpen}>
        <pre className="mt-4">{objAsText}</pre>
      </Modal>
    </>
  );
}
