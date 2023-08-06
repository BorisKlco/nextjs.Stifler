"use client";
import useFilter from "@/hooks/useFilter";
import RowItem from "./RowItem";
import moment from "moment";

export default function TableBody({ logs }: any) {
  const filter = useFilter();
  let filterDate;

  if (filter.enableFilter) {
    if (filter.dateFilter?.startDate != null) {
      if (filter.dateFilter?.startDate == filter.dateFilter?.endDate) {
        const startDate = moment(filter.dateFilter?.startDate).unix();
        const endDate = startDate + 86400;

        filterDate = logs.filter(
          (item: any) =>
            Math.floor(item.ts) >= startDate && Math.floor(item.ts) <= endDate
        );
      } else {
        const startDate = moment(filter.dateFilter?.startDate).unix();
        const endDate = moment(filter.dateFilter?.endDate).unix();

        filterDate = logs.filter(
          (item: any) =>
            Math.floor(item.ts) >= startDate && Math.floor(item.ts) <= endDate
        );
      }
    } else {
      filterDate = logs;
    }

    const filterIP = filterDate.filter((item: any) =>
      filter.ip.includes(item.request.remote_ip)
    );

    const filterStatus = filterIP.filter((item: any) =>
      filter.status.includes(item.status.toString())
    );

    return (
      <>
        <tbody>
          {filterStatus.map((line: any) => (
            <RowItem key={line.ts} props={...line} />
          ))}
        </tbody>
      </>
    );
  }

  return (
    <>
      <tbody>
        {logs.map((line: any) => (
          <RowItem key={line.ts} props={...line} />
        ))}
      </tbody>
    </>
  );
}
