import React from "react";
import { TiHome } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";

const navigationItem = [
  {
    title: "Twitter",
    icon: BsTwitterX,
  },
  {
    title: "Home",
    icon: TiHome,
  },
  {
    title: "Explore",
    icon: IoMdSearch,
  },
  {
    title: "Notifications",
    icon: FaRegBell,
  },
  {
    title: "Messege",
    icon: FaRegEnvelope,
  },
  {
    title: "BooksMarks",
    icon: FaRegBookmark,
  },
  {
    title: "Profile",
    icon: FaRegUser,
  },
];

const LeftSidebar = () => {
  return (
    <section className="fixed w-[75] flex flex-col items-stretch h-screen space-y-4 justify-between bg-black ">
      <div className="w-full my-4 ">
        {navigationItem.map((item) => (
          <Link
            key={item.title}
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-center w-fit rounded-3xl py-2 px-4 space-x-4 my-3"
            href={`/${item.title.toLocaleLowerCase()}`}
          >
            <div className="text-3xl">
              <item.icon />
            </div>
            {item.title !== "Twitter" && <div> {item.title} </div>}
          </Link>
        ))}
        <button className="w-full rounded-full bg-primary px-4 py-3 text-md mt-6 text-center">
          Post
        </button>
      </div>
      <button className=" rounded-full flex items-center space-x-2 my-4 bg-transparent p-2 text-center hover:bg-white/10 transition duration-200 w-full ">
        <div className="flex items-center space-x-2 ">
          <div className="rounded-full bg-slate-400 w-12 h-12"></div>
          <div className="text-left text-sm">
            <div className="font-semibold"> usama rahman </div>
            <div className=""> @usamarahman </div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
