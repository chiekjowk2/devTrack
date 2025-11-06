'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiListCheck, BiListOl, BiLogoBitcoin } from "react-icons/bi";
import { BiSolidUserAccount } from "react-icons/bi";
export default function Sidebar() {
  const pathname = usePathname();
  
  const list = [
    {
      name: "Logs",
      link: "/",
      Icon: <BiListOl style={{ fontSize: "25PX" }} />,
    },
    {
      name: "Profile",
      link: "/profile",
      Icon: <BiSolidUserAccount style={{ fontSize: "20PX" }} />,
    },
  ];
  return (
    <div className=" h-full px-2 py-2">
      <h1 className="text-xl mb-10 p4">DevTracker</h1>
      <div className="  h-30 mb-2 flex flex-col p-5 items-center">
        <div className="bg-green-400 w-20 h-20 rounded-full"></div>
      </div>
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-x">Dashboard</h1>
      </div>
      <ul className="flex flex-col gap-3 text-center p-1">
        {list.map((item, link) => {
          return (
            <li
              key={item.name}
              className={`h-10 rounded flex items-center justify-center ${
                pathname === item.link ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              <Link
                href={item.link}
                className="w-full h-full flex items-center rounded gap-2  "
              >
                <div>{item.Icon}</div>
                <h3>{item.name}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  ); 
}
