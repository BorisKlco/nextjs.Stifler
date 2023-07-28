import moment from "moment";

type RowItemProps = {
  date: number;
  ip: string;
  method: string;
  agent: string;
};

export default function RowItem({ date, ip, method, agent }: RowItemProps) {
  const logDate = moment.unix(date).format("YYYY-MM-DD HH:mm:ss.SSS");
  return (
    <tr className="bg-blue-600 border-b border-blue-400">
      <th className="px-6 py-4 truncate bg-blue-500 max-w-[8rem]">{logDate}</th>
      <td className="px-6 py-4 truncate max-w-[6rem]">{ip}</td>
      <td className="px-6 py-4 truncate bg-blue-500 max-w-[12rem]">{method}</td>
      <td className="px-6 py-4 truncate max-w-[8rem]">{agent}</td>
      <td className="px-6 py-4 truncate bg-blue-500">Item</td>
    </tr>
  );
}
