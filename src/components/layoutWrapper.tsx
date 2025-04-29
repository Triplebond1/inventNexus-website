"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";
import Navbar from "./header";
import { ScrollBackToTop } from "./pageFeature/pageFeaturesClient";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define routes that should not include Navbar and Footer
  const noLayoutRoutes = ["/signup", "/login"];
  const hideLayout =
    noLayoutRoutes.includes(pathname) || pathname.startsWith("/dashboard");

  return (
    <div>
      {!hideLayout && (
        <header className="w-full sticky top-0 z-50">
          <Navbar />
        </header>
      )}
      <main>{children}</main>

      {!hideLayout && (
        <footer className=" flex dark:bg-gray-900 justify-center border-t-4 border-blaze-orange-500 bg-gray-50 pb-10 w-full  flex-col sm:items-center items-center bg-gray-900 text-white mt-10 py-10">
          <Footer />
        </footer>
      )}

      {/* Back to Top Button */}
      <ScrollBackToTop />
    </div>
  );
}
