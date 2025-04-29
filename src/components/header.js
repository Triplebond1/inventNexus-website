"use client";
import { CustomLink } from "./pageFeature/pageFeaturesServer";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down, hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up, show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const homeMenu = [
    {
      Href: "/",
      Text: "Home",
    },

    {
      Href: "/#about-us",
      Text: "About Us",
    },

    {
      Href: "/#mission-statement",
      Text: "Mission Statement",
    },

    {
      Href: "/#invent-pedia",
      Text: "InventPedia",
    },

    {
      Href: "/privacy-policy",
      Text: " Privacy Policy",
    },
  ];
  return (
    <nav
      className={`bg-white text-black outline outline-5 outline-blaze-orange-400 sticky top-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
       
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-blaze-orange-950">
          <Image
            src="/pngIcons/inventnexus-2.png"
            width={40}
            height={40} // Adjust height to maintain aspect ratio
            alt="InventNexus logo"
            className="object-contain max-h-10 rounded-sm"
          />
          <span>InventNexus</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 font-semibold">
          <ul className="flex space-x-4 ">
            {homeMenu.map((item, index) => (
              <li key={index}>
                <CustomLink Href={item.Href} Text={item.Text} />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none hover:bg-blaze-orange-600 "
            aria-label="Toggle Menu"
            style={{}}
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6 bg-blaze-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white text-black md:hidden ">
          <ul className="flex flex-col   py-5 px-6 divide-y-2  divide-blaze-orange-400 font-semibold">
            {homeMenu &&
              homeMenu.map((item, index) => (
                <li className=" pt-5 box-border w-full" key={index}>
                  <CustomLink Href={item.Href} Text={item.Text} />
                </li>
              ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
