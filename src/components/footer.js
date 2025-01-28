import Image from "next/image";
import { SocialMediaLink } from "./pageFeature";
import {
  FaceBookIcon,
  InstagramIcon,
  XIcon,
  LinkedinIcon,
} from "../app/svg/icons";

export default function Footer() {
  return (
    <footer className="flex column-3 w-full items-center justify-center border-spacing-10 border-t-2 mb-5 flex-col bg-gray pt-2">
      {/* <follow on social media column /> */}
      <div className="column-1 bg-gray ">
        <p className="font-bold text-blaze-orange-600">
          follow on social media
        </p>
        <div className=" flex grid-flow-row mt-2">
          {" "}
          <SocialMediaLink Icon={FaceBookIcon} Href={""} />
          <SocialMediaLink Icon={LinkedinIcon} Href={""} />
          <SocialMediaLink Icon={XIcon} Href={""} />
          <SocialMediaLink Icon={InstagramIcon} Href={""} />
        </div>
      </div>

      {/* Logo Section */}
      <div className="w-full flex justify-center mb-4 pt-5">
        <Image
          src="/invent-logo-1.jpg"
          layout="responsive"
          width={32}
          height={24}
          alt="InventNexus logo icon"
          className="object-cover"
        />
      </div>

      {/* <powered by column /> */}
      <div className="column-1 ">
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
