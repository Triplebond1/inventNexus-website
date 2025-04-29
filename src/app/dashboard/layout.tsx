"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  Cog8ToothIcon,
  UserCircleIcon,
  IdentificationIcon,
  PencilSquareIcon,
  BookOpenIcon,
  PhotoIcon,
  ChevronDownIcon,
  BellIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";



const Sidebar = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState({});

  const menuItems = useMemo(() =>[
    {
      title: "Home",
      icon: HomeIcon,
      navLink: "/dashboard",
    },
    {
      title: "Posts",
      icon: PencilSquareIcon,
      navLink: "/dashboard/posts",
      subItems: [
        { url: "/dashboard/posts", label: "All Posts" },
        { url: "/dashboard/posts/addNewPost", label: "Add New" },
        { url: "/dashboard/posts/categories", label: "Categories" },
        { url: "/dashboard/posts/tags", label: "Tags" },
      ],
    },
    {
      title: "Pages",
      icon: BookOpenIcon,
      navLink: "/dashboard/pages",
      subItems: [
        { url: "/dashboard/pages", label: "All Pages" },
        { url: "/dashboard/pages/addNewPage", label: "Add New" },
      ],
    },
    {
      title: "Media",
      icon: PhotoIcon,
      navLink: "/dashboard/media",
      subItems: [
        { url: "/dashboard/media", label: "Library" },
        { url: "/dashboard/media/upload", label: "Add New" },
      ],
    },
    {
      title: "Profile",
      icon: IdentificationIcon,
      navLink: "/dashboard/profile",
    },
    {
      title: "Users",
      icon: UserCircleIcon,
      navLink: "/dashboard/users",
    },
    {
      title: "Settings",
      icon: Cog8ToothIcon,
      navLink: "/dashboard/settings",
    },
  ], []);

  useEffect(() => {
    const initialExpanded = {};
    menuItems.forEach((item) => {
      if (
        item.subItems &&
        item.subItems.some((sub) => pathname.startsWith(sub.url))
      ) {
        initialExpanded[item.title] = true;
      }
    });
    setExpandedItems(initialExpanded);
  }, [pathname, menuItems]);

  const toggleItem = (item) => {
    setExpandedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:static md:translate-x-0 transition-transform duration-300 z-40 flex flex-col`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <span className="text-xl font-bold">InventNexus</span>
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-300 hover:text-white"
        >
          <BellIcon className="w-5 h-5" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {menuItems.map((item) => {
          const isActive = item.subItems
            ? pathname.startsWith(item.navLink)
            : pathname === item.navLink;
          return (
            <div key={item.title}>
              <div
                className={`flex items-center px-4 py-2 rounded-lg ${
                  isActive ? "bg-gray-800 text-blue-400" : "hover:bg-gray-800"
                }`}
              >
                <Link
                  href={item.navLink}
                  className="flex items-center flex-1"
                  onClick={() => isOpen && toggleSidebar()}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.title}</span>
                </Link>
                {item.subItems && (
                  <button
                    onClick={() => toggleItem(item.title)}
                    className="ml-auto"
                  >
                    <ChevronDownIcon
                      className={`w-5 h-5 transition-transform ${
                        expandedItems[item.title] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.subItems && expandedItems[item.title] && (
                <div className="ml-6 space-y-1">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.url}
                      className={`block px-4 py-1 text-sm rounded-lg ${
                        pathname === sub.url
                          ? "bg-gray-800 text-blue-400"
                          : "hover:bg-gray-800"
                      }`}
                      onClick={() => isOpen && toggleSidebar()}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

const Topbar = ({ toggleSidebar, user }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white h-16 flex items-center justify-between px-4 border-b border-gray-800 sticky top-0 z-30">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-300 hover:text-white mr-4"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-300 hover:text-white">
          <BellIcon className="w-6 h-6" />
        </button>
        <div className="relative">
          <button
            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            className="flex items-center text-gray-300 hover:text-white"
          >
            <UserCircleIcon className="w-6 h-6" />
          </button>
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg p-2 text-sm">
              <p className="font-medium text-gray-300">{user.name}</p>
              <Link
                href="/dashboard/profile"
                className="block py-1 hover:text-blue-400"
              >
                Profile
              </Link>
              <button className="block w-full text-left py-1 hover:text-blue-400">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const user = { name: "John Doe" }; // Mock user data

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Topbar toggleSidebar={toggleSidebar} user={user} />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;