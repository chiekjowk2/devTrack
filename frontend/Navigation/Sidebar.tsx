"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiListOl, BiSolidUserAccount } from "react-icons/bi";

export default function Sidebar() {
  const pathname = usePathname();

  const list = [
    {
      name: "Logs",
      link: "/",
      Icon: <BiListOl style={{ fontSize: "25px" }} />,
    },
    {
      name: "Profile",
      link: "/profile",
      Icon: <BiSolidUserAccount style={{ fontSize: "20px" }} />,
    },
  ];

  return (
    <div
      className="h-full bg-[#11121E] text-white transition-all duration-300 ease-in-out 
        w-20 md:w-64 p-3 flex flex-col items-center md:items-start"
    >
    
      <h1 className="text-xl mb-10 p-4 font-semibold hidden md:block">
        DevTracker
      </h1>

    
      <div className="w-full h-30 mb-2 flex flex-col p-3 items-center">
        <div className="bg-green-400 w-12 h-12 md:w-20 md:h-20 rounded-full"></div>
      </div>

     
      <div className=" w-full p-2 flex items-center justify-center mb-4 font-bold">
        <h1 className="text-sm md:text-lg hidden md:block">Dashboard</h1>
      </div>

      <ul className="flex flex-col gap-4 w-full text-center p-1">
        {list.map((item) => (
          <li
            key={item.name}
            className={`h-10 rounded flex items-center justify-center md:justify-start ${
              pathname === item.link ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <Link
              href={item.link}
              className="w-full h-full flex items-center gap-2 px-2 md:px-3 rounded"
            >
              <div className="flex justify-center md:justify-start w-full md:w-auto">
                {item.Icon}
              </div>
            
              <h3 className="hidden md:block">{item.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto mb-10 px-2">
        <button  className="cursor-pointer">Signout</button>
      </div>
    </div>
  );
}
