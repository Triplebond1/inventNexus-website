"use client";
import Navbar from "../../components/header";
import Footer from "../../components/footer";
import Body from "../../components/privacyPolicy/body.js";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex-col flex-wrap ...">
      {/* <Header /> */}
      <Navbar />
      {/* main body /> */}
      <main className="flex justify-center w-full flex-1 text-blaze-orange-100">
        <Body />
      </main>
      <footer className="flex-1">
        <Footer />
      </footer>
    </div>
  );
}