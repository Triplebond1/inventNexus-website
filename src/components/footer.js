import Image from "next/image";
import { SocialMediaLink } from "./pageFeature/pageFeaturesServer";
import { FaceBookIcon, InstagramIcon, XIcon, LinkedinIcon } from "./svg/icons";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-gray-100 justify-center border-t-2 border-blaze-orange-400 mt-5 bg-gray-50 pt-4 pb-4">
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
      <div className="mb-4">
        <Image
          src="/jpgImages/invent-logo-1.jpg"
          width={400}
          height={50}
          alt="InventNexus logo"
          className=" object-cover object-center max-h-96"
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
