
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-black outline  outline-5 outline-blaze-orange-400 sticky top-0">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blaze-orange-500">InventNexus</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 font-semibold">
          <ul className="flex space-x-6 ">
            <li>
              <Link href="/"
                className="hover:text-blaze-orange-500">Home
              </Link>
            </li>
            <li>
              <Link href="#about-us"
              className="hover:text-blaze-orange-500">About Us
              </Link>
            </li>
            <li>
              <Link href="#mission-statement"
                className="hover:text-blaze-orange-500">Mission Statement
              </Link>
            </li>
            <li>
              <Link href="#invent-pedia"
                className="hover:text-blaze-orange-500">InventPedia
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy"
                className="hover:text-blaze-orange-500">Privacy Policy
              </Link>
            </li>
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
          <ul className="flex flex-col space-y-5 py-5 px-6 divide-y-2  divide-blaze-orange-400 font-semibold">
          <li className=' box-border w-full'>
              <Link href="/"
                className="hover:text-blaze-orange-500">Home
              </Link>
            </li>
            <li className=' box-border w-full '>
              <Link href="#about-us"
              className="hover:text-blaze-orange-500">About Us
              </Link>
            </li>
            <li className=' box-border w-full'>
              <Link href="#mission-statement"
                className="hover:text-blaze-orange-500">Mission Statement
              </Link>
            </li>
            <li className=' box-border w-full'>
              <Link href="#invent-pedia"
                className="hover:text-blaze-orange-500">InventPedia
              </Link>
            </li>
            <li className=' box-border w-full '>
              <Link href="/privacy-policy"
                className="hover:text-blaze-orange-500">Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
