import React from "react";
import { TiHome } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import SidebarLogo from "./ui/SidebarLogo";
import SidebarItem from "./ui/SidebarItem";
import SidebarPostButton from "./ui/SidebarPostButton";

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
        <div className="space-y-2 lg:w-[230px]  ">
          <SidebarLogo />
          {navigationItem.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarPostButton />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
