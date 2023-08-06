"use client";
import useFilter from "@/hooks/useFilter";
import RowItem from "./RowItem";

export default function TableBody({ logs }: any) {
  const filter = useFilter();

  if (filter.enableFilter) {
    const filterIP = logs.filter((item: any) =>
      filter.ip.includes(item.request.remote_ip)
    );

    const filterStatus = filterIP.filter((item: any) =>
      filter.status.includes(item.status.toString())
    );

    return (
      <tbody>
        {filterStatus.map((line: any) => (
          <RowItem key={line.ts} props={...line} />
        ))}
      </tbody>
    );
  }

  return (
    <tbody>
      {logs.map((line: any) => (
        <RowItem key={line.ts} props={...line} />
      ))}
    </tbody>
  );
}
