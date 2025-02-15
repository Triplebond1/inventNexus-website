import Image from "next/image";
import { SocialMediaLink } from "./pageFeature/pageFeaturesServer";
import { FaceBookIcon, InstagramIcon, XIcon, LinkedinIcon } from "./svg/icons";

export default function Footer() {
  return (
    <footer className="w-screen flex flex-col items-center dark:bg-gray-100 bg-gray-100 justify-center border-t-4 border-blaze-orange-500 bg-gray-50 pt-4 pb-10">
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
      <div className="text-center font-semibold text-blaze-orange-950">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} InventNexus. All rights reserved.
        </p>
        <p className="text-blaze-orange-600">
          Powered by{" "}
          <span className="font-bold text-blaze-orange-600">
            Triplebond Technology
          </span>
        </p>
      </div>
    </footer>
  );
}
