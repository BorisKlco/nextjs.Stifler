import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl mt-4 font-bold text-wwhite drop-shadow-[0px_0px_1px_rgba(0,0,0)]">
        Dashboard
      </h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] border border-wstroke mt-8">
        <table className="w-full text-sm text-left text-wwhite">
          <thead className="text-xs uppercase bg-blue-600 border-b border-blue-400 text-wwhite">
            <tr>
              <th scope="col" className="px-6 py-3 bg-blue-500">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3 bg-blue-500">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 bg-blue-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-600 border-b border-blue-400">
              <th
                scope="row"
                className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4 bg-blue-500">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 bg-blue-500">
                <a href="#" className="font-medium text-white hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-blue-600 border-b border-blue-400">
              <th
                scope="row"
                className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4 bg-blue-500">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4 bg-blue-500">
                <a href="#" className="font-medium text-white hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-blue-600 border-b border-blue-400">
              <th
                scope="row"
                className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4 bg-blue-500">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4 bg-blue-500">
                <a href="#" className="font-medium text-white hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-blue-600 border-b border-blue-400">
              <th
                scope="row"
                className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                Google Pixel Phone
              </th>
              <td className="px-6 py-4">Gray</td>
              <td className="px-6 py-4 bg-blue-500">Phone</td>
              <td className="px-6 py-4">$799</td>
              <td className="px-6 py-4 bg-blue-500">
                <a href="#" className="font-medium text-white hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-blue-600 border-blue-40">
              <th
                scope="row"
                className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                Apple Watch 5
              </th>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4 bg-blue-500">Wearables</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4 bg-blue-500">
                <a href="#" className="font-medium text-white hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
