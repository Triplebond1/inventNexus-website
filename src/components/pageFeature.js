"use client"
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

export const PageName = ({ pageName }) => {
  return (
    <div className="flex w-20 h-10 items-center justify-left px-2 text-center font-bold text-xl border-gray-300">
      <div>
        <ChevronDoubleRightIcon className="w-4 h-3 text-blaze-orange-950" />
      </div>
      <div className="text-blaze-orange-600 pl-2">{pageName}</div>
    </div>
  );
};

export const SocialMediaLink = ({ Name, Icon, Href }) => {
  return (
    <div className="container h-12 flex items-center m-auto border-solid border-b-white border-b-2">
      <Link
        href={Href}
        className="text-blaze-orange-600 font-semibold flex justify-items-center my-auto items-center gap-2"
      >
        {Name}
        <Icon />
      </Link>
    </div>
  );
};

export const ScrollBackToTop = ({}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 bg-blaze-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-blaze-orange-600 transition"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
};


export const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-10 border border-gray-200 rounded">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
      >
        <span className="text-2xl font-semibold">{title}</span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 text-sm text-gray-600">{children}</div>}
    </div>
  );
};