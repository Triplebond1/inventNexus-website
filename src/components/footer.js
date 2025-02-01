import Image from "next/image";
import { SocialMediaLink } from "./pageFeature";
import { FaceBookIcon, InstagramIcon, XIcon, LinkedinIcon } from "./svg/icons";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center border-t-2 border-gray-200 mt-5 bg-gray-50 pt-4 pb-4">
      {/* Social Media Section */}
      <div className="mb-4 text-center">
        <p className="font-bold text-blaze-orange-600">
          Follow us on social media
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <SocialMediaLink Icon={FaceBookIcon} Href="" />
          <SocialMediaLink Icon={LinkedinIcon} Href="" />
          <SocialMediaLink Icon={XIcon} Href="" />
          <SocialMediaLink Icon={InstagramIcon} Href="" />
        </div>
      </div>

      {/* Logo Section */}
      <div className="w-full mb-4">
        <Image
          src="/invent-logo-1.jpg"
          layout="responsive"
          width={32}
          height={32}
          alt="InventNexus logo"
          className="object-cover"
        />
      </div>

      {/* Copyright */}
      <div className="text-center font-semibold">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} InventNexus. All rights reserved.
        </p>
        <p className="text-blaze-orange-700">
          Powered by{" "}
          <span className="font-bold text-blaze-orange-700">
            Triplebond Technology
          </span>
        </p>
      </div>
    </footer>
  );
}
