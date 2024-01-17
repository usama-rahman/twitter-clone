import React from "react";
import { TiHome } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import SidebarLogo from "./ui/SidebarLogo";
import SidebarItem from "./ui/SidebarItem";

const navigationItem = [
  {
    label: "Home",
    href: "/",
    icon: TiHome,
  },
  {
    label: "Explore",
    href: "/explore",
    icon: IoMdSearch,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: FaRegBell,
  },
  {
    label: "Messege",
    href: "/messege",
    icon: FaRegEnvelope,
  },
  {
    label: "BooksMarks",
    href: "/booksmarks",
    icon: FaRegBookmark,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: FaRegUser,
  },
];

const LeftSidebar = () => {
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6 ">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {navigationItem.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
  // return (
  //   <section className="fixed xl:w-[15%] flex flex-col  h-screen space-y-4 justify-between text-white  border-solid border-r-[1px] border-gray-800">
  //     <div className="my-4 w-full ">
  //       {navigationItem.map((item) => (
  //         <Link
  //           key={item.label}
  //           className="hover:bg-white/10 text-xl transition duration-200 flex items-center justify-center w-full xl:w-fit rounded-3xl py-2 px-4 space-x-4 my-3"
  //           href={`/${item.label.toLocaleLowerCase()}`}
  //         >
  //           <div className="text-2xl">
  //             <item.icon />
  //           </div>
  //           <div className="xl:flex hidden">
  //             {item.label !== "Twitter" && <div> {item.label} </div>}
  //           </div>
  //         </Link>
  //       ))}
  //       <div className="w-full flex justify-end">
  //         <button className="xl:w-full rounded-full bg-primary px-4 py-3 text-md mt-6 mx-4 text-center">
  //           Post
  //         </button>
  //       </div>
  //     </div>
  //     <button className=" rounded-full flex items-center space-x-2 my-4 bg-transparent p-2 text-center hover:bg-white/10 transition duration-200 w-full ">
  //       <div className="flex items-center space-x-2 ">
  //         <div className="rounded-full bg-slate-400 w-12 h-12"></div>

  //         <div className="text-left text-sm hidden xl:flex  flex-col">
  //           <div className="font-semibold"> usama rahman </div>
  //           <div className=""> @usamarahman </div>
  //         </div>
  //         <div className="hidden xl:flex">
  //           <BsThreeDots />
  //         </div>
  //       </div>
  //     </button>
  //   </section>
  // );
};

export default LeftSidebar;
