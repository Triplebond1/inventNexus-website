"use client";
import { useEffect, useState } from "react";

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

export const PostDropDown = ({post}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-full p-2  bg-blaze-orange-100 rounded-lg justify-center flex flex-wrap text-start items-center"
      >
        
        {/* post name */}
        <div className="flex-shrink-0 w-2/6 sm:w-2/6 h-6 overflow-hidden whitespace-nowrap text-ellipsis px-2">
          <h3 className="text-sm font-normal text-center">{post.postName}</h3>
        </div>
        {/* post status */}
        <div className="flex-shrink-0 w-2/6 sm:w-2/6 h-6 overflow-hidden whitespace-nowrap text-ellipsis px-2">
          <h3 className="text-sm font-normal text-center">{post.status}</h3>
        </div>
        {/* post date published */}
        <div className="flex-shrink-0 w-2/6 sm:w-2/6 h-6 overflow-hidden whitespace-nowrap text-ellipsis px-2">
          <h3 className="text-sm font-normal text-center">
            {post.datePublished}
          </h3>
          </div>
          </button>
      
      {isOpen && (
        <div className="p-4 text-sm text-gray-600">
          {/* post SEO rating */}
          <div className="flex-shrink-0 w-1/6 sm:w-1/6 h-6 overflow-hidden whitespace-nowrap text-ellipsis px-2">
            <h3 className="text-sm font-normal text-center">SEO Rating</h3>
          </div>
          {/* post traffic */}
          <div className="flex-shrink-0 w-1/6 sm:w-1/6 h-6 overflow-hidden whitespace-nowrap text-ellipsis px-2">
            <h3 className="text-sm font-normal text-center">Traffic</h3>
          </div>{" "}
        </div>
      )}
    </div>
  );
};
