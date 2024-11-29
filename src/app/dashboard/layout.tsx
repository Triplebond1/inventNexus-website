"use client";
import { useState } from "react";
import Link from "next/link";
import String from "../ui/string";
import {
  HomeIcon,
  Cog8ToothIcon,
  UserCircleIcon,
  IdentificationIcon,
  PencilSquareIcon,
  BookOpenIcon,
  PhotoIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  BellIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    {
      title: "Post",
      icon: PencilSquareIcon,
      links: [
        { url: "/posts/all-posts", label: "All Posts" },
        { url: "/posts/add-new", label: "Add New Post" },
        { url: "/posts/categories", label: "Categories" },
        { url: "/posts/tags", label: "Tags" },
      ],
    },
    {
      title: "Page",
      icon: BookOpenIcon,
      links: [
        { url: "/pages/all-pages", label: "All Pages" },
        { url: "/pages/add-new", label: "Add New Page" },
      ],
    },
    {
      title: "Media",
      icon: PhotoIcon,
      links: [
        { url: "/media/library", label: "Library" },
        { url: "/media/add-new", label: "Add New Media" },
      ],
    },
  ];

  return (
    <div
      className={`flex flex-col ${
        isCollapsed ? "w-20" : "w-40"
      } h-[100%] bg-blaze-orange-600 font-bold text-black flew-wrap`}
    >

      <nav className="mt-4 space-y-2">
        {isCollapsed ? 
          // {is collapsed}
          (
          <div>
            {/* Logo */}
            <div className="flex w-20 h-16 items-center justify-between px-2 text-center font-bold text-xl border-b border-gray-300">
              {/* SVG Logo */}
              <div className= "w-14 h-10 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 150 100"
                  width="30"
                  height="35"
                >
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontFamily="Arial, sans-serif"
                    fontSize="150"
                    fill="#000000"
                  >
                    IN
                  </text>
                </svg>
              </div>

              {/* Toggle Button */}
              <div className="w-6 h-10 items-end">
                <button
                  onClick={toggleSidebar}
                  className="p-1 bg-gray rounded hover:bg-gray-300 focus:outline-none"
                >
                  {isCollapsed ? (
                    <ChevronDoubleRightIcon className="w-4 h-3 text-black" />
                  ) : (
                    <ChevronDoubleLeftIcon className="w-6 h-5 text-blue-500" />
                  )}
                </button>
              </div>
            </div>

            {/* home static link */}
            <Link href="/home" className="block px-4 py-2 hover:bg-gray">
              <HomeIcon className="size-6 text-blue-500" />
            </Link>

            {/* Dynamic Links */}
            {menuItems.map((item) => (
              <div className="group" key={item.title}>
                <p className="block px-4 py-2 cursor-pointer hover:bg-gray">
                  {<item.icon className="size-6 text-blue-500" />}
                </p>
                <div className="ml-4 hidden group-hover:block">
                  {item.links.map((link) => (
                    <Link
                      href={link.url}
                      key={link.label}
                      className="block px-4 py-2 hover:bg-gray"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Static Links */}
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray">
              <IdentificationIcon className="size-6 text-blue-500" />
            </Link>
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray">
              <UserCircleIcon className="size-6 text-blue-500" />
            </Link>
            <Link href="/settings" className="block px-4 py-2 hover:bg-gray">
              <Cog8ToothIcon className="size-6 text-blue-500" />
            </Link>
          </div>

        ) :
          // {isnot collapsed}
          (
            <div>
              
              <div className="flex w-40 h-16 items-center justify-between px-2 text-center font-bold text-lg border-b border-gray-300">
              {/* Logo */}
              <div className= "w-25 h-10 ">
              {String.siteName}
              </div>

              {/* Toggle Button */}
              <div className="w-10 h-10 items-end">
                <button
                  onClick={toggleSidebar}
                  className=" bg-gray rounded hover:bg-gray-300 focus:outline-none p-1 m-1"
                >
                  {isCollapsed ? (
                    <ChevronDoubleRightIcon className="w-5 h-3 text-blaze_orange-900" />
                  ) : (
                    <ChevronDoubleLeftIcon className="w-5 h-3 text-blaze_orange-900" />
                  )}
                </button>
              </div>
            </div>

            {/* home static link */}
            <Link href="/home" className="block px-4 py-2 hover:bg-gray">
              Home
            </Link>

            {/* Dynamic Links */}
            {menuItems.map((item) => (
              <div className="group" key={item.title}>
                <p className="block px-4 py-2 cursor-pointer hover:bg-gray">
                  {item.title}
                </p>
                <div className="ml-4 hidden group-hover:block">
                  {item.links.map((link) => (
                    <Link
                      href={link.url}
                      key={link.label}
                      className="block px-4 py-2 hover:bg-gray"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Static Links */}

            <Link href="/profile" className="block px-4 py-2 hover:bg-gray">
              Profile
            </Link>
            <Link href="/settings" className="block px-4 py-2 hover:bg-gray">
              User
            </Link>
            <Link href="/settings" className="block px-4 py-2 hover:bg-gray">
              Settings
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

const Topbar = ({ toggleCollapse }) => {
  return (
    <div className="flex justify-between items-center h-16 bg-blaze-orange-600 text-white px-4">
      <button onClick={toggleCollapse} className="text-white">
        <span className="material-icons">menu</span>
      </button>
      <span className="font-bold">Dashboard</span>
      <div className="flex items-center space-x-4">
        <BellIcon className="size-6 text-blue-500" />
        <UserCircleIcon className="size-6 text-blue-500" />
      </div>
    </div>
  );
};

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar toggleCollapse={toggleCollapse} />

        {/* Main Content */}
        <main className="p-4 bg-blaze-orange-300 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
