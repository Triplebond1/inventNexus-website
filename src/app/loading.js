"use client";
import { useState, useEffect } from "react";

export default function LoadingPage({ message = "Loading..." }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer); // Cleanup timer
  }, []); // Runs once on mount

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div
        className={`flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 border-solid"></div>
        {/* Loading Message */}
        <p className="text-lg font-medium text-gray-700">
          {message.trim() || "Please wait..."}
        </p>
      </div>
    </div>
  );
}