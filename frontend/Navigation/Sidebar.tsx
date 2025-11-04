'use client'
import { usePathname } from 'next/navigation';
import Link from "next/link";
import React from 'react'

export default function Sidebar() {
  const pathname = usePathname();
   
  const list = [
   
    { name: "Logs", link: "/logs" },
    { name: "Profile", link: "/profile" },
  ];
  return (
    <div className="bg-[#122043bc] shadow border-r h-full px-2 py-2">
      <h1 className="text-2xl mb-10 p4">DevTracker</h1>
      <div className="  h-40 mb-4 flex flex-col p-5 items-center">
        <div className="bg-green-400 w-30 h-40 rounded-full"></div>
      </div>
      <div className="flex items-center justify-center mb-2">
        <h1 className="text-xl">Dashboard</h1>
      </div>
      <ul className="flex flex-col gap-3 text-center">
        {list.map((item, link) => {
          return (
            <li
              key={item.name}
              className={"h-10 rounded flex items-center justify-center"}
            >
              <Link
                href={item.link}
                className="w-full h-full flex items-center justify-center rounded "
              >
                <h3 >{item.name}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  ); 
}
