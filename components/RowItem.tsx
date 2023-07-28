import moment from "moment";

export default function RowItem({ props }) {
  const logDate = moment.unix(props.ts).format("YYYY-MM-DD HH:mm:ss.SSS");
  return (
    <tr className="bg-blue-600 border-b border-blue-400 hover:brightness-125 cursor-pointer">
      <th className="px-6 py-4 truncate bg-blue-500 max-w-[8rem]">{logDate}</th>
      <td className="px-6 py-4 truncate max-w-[6rem]">
        {props.request.remote_ip}
      </td>
      <td className="px-6 py-4 truncate bg-blue-500 max-w-[12rem]">{`${props.request.method}, ${props.request.uri}`}</td>
      <td className="px-6 py-4 truncate max-w-[8rem]">
        {props.request.headers["User-Agent"]}
      </td>
      <td className="px-6 py-4 truncate bg-blue-500">Item</td>
    </tr>
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
