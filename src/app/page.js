"use client";
import Navbar from "../components/header";
import Footer from "../components/footer";
import Body from "../components/frontPage/body";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex-col flex-wrap ...">

      {/* main body /> */}
      <div className="flex justify-center w-full flex-1 text-blaze-orange-100">
        <Body />
      </div>

    </div>
  );
}
