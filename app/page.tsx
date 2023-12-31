import Sidebar from "@/components/(bars)/Sidebar";
import TableBody from "@/components/(table)/TableBody";

import fsPromises from "fs/promises";
import path from "path";

export default async function Home() {
  const filePath = path.join(process.cwd(), "y.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const logEntries = jsonData.trim().split("\n");
  const formattedLogs = logEntries.map((logEntry) => {
    return JSON.parse(logEntry);
  });

  const ipList: string[] = [];
  const statusList: string[] = [];

  for (const item in formattedLogs) {
    if (!ipList.includes(formattedLogs[item].request.remote_ip)) {
      ipList.push(formattedLogs[item].request.remote_ip);
    }
    if (!statusList.includes(formattedLogs[item].status.toString())) {
      statusList.push(formattedLogs[item].status.toString());
    }
  }

  return (
    <Sidebar ip={ipList} status={statusList}>
      <div className="flex flex-col items-center max-h-[80%]">
        <h1 className="text-5xl mt-4 font-bold text-wwhite drop-shadow-[0px_0px_1px_rgba(0,0,0)]">
          Dashboard
        </h1>

        <div className="flex gap-2 mt-4">
          <div className=" flex gap-2 py-3 px-6 border border-wstroke m-2 rounded-lg bg-blue-500 text-wwhite text-lg">
            <h1 className="text-bold">Uniq Ip&apos;s: </h1> {ipList.length}
          </div>
        </div>

        <div className="shadow-md overflow-x-auto sm:rounded-lg w-[80%] border border-wstroke mt-4 ">
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
            <TableBody logs={formattedLogs} />
          </table>
        </div>
      </div>
    </Sidebar>
  );
}
