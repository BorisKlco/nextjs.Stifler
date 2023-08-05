import RowItem from "./RowItem";

export default function TableBody({ logs }: any) {
  return (
    <tbody>
      {logs.map((line: any) => (
        <RowItem key={line.ts} props={...line} />
      ))}
    </tbody>
  );
}
