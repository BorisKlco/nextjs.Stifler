import RowItem from "@/components/RowItem";

import fsPromises from "fs/promises";
import path from "path";

export default async function Home() {
  const filePath = path.join(process.cwd(), "yt.json");
  const jsonData: any = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return (
    <div className="flex flex-col items-center max-h-[80%]">
      <h1 className="text-5xl mt-4 font-bold text-wwhite drop-shadow-[0px_0px_1px_rgba(0,0,0)]">
        Dashboard
      </h1>

      <div className="shadow-md overflow-x-auto sm:rounded-lg w-[80%] border border-wstroke mt-8 ">
        <table className="w-full text-sm text-left text-wwhite">
          <thead className="text-xs uppercase bg-blue-600 border-b border-blue-400 text-wwhite">
            <tr>
              <th scope="col" className="px-6 py-3 bg-blue-500">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                IP
              </th>
              <th scope="col" className="px-6 py-3 bg-blue-500">
                Method + URI
              </th>
              <th scope="col" className="px-6 py-3">
                User-Agent
              </th>
              <th scope="col" className="px-6 py-3 bg-blue-500">
                Referer
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {objectData.map((line) => (
              <RowItem
                key={line.ts}
                date={line.ts}
                ip={line.request.remote_ip}
                method={`${line.request.method}, ${line.request.uri}`}
                agent={line.request.headers["User-Agent"]}
              />
            ))} */}
            {objectData.map((line: any) => (
              <RowItem key={line.ts} props={...line} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
