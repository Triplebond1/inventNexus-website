import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PageName,
  SocialMediaLink,
} from "../../../components/pageFeature/pageFeaturesServer";
import {
  FaceBookIcon,
  WhatsappIcon,
  LinkedinIcon,
  InstagramIcon,
  XIcon,
} from "../../../components/svg/icons";

const socialMediaLinks = [
  { Icon: FaceBookIcon, name: "FACEBOOK", href: "" },
  { Icon: WhatsappIcon, name: "WHATSAPP", href: "" },
  { Icon: LinkedinIcon, name: "LINKEDIN", href: "" },
  { Icon: InstagramIcon, name: "INSTAGRAM", href: "" },
  { Icon: XIcon, name: "X", href: "" },
];

const profileTabs = [
  { tabName: "USERNAME", text: "Your username here" },
  { tabName: "EMAIL", text: "Your email here" },
  { tabName: "ROLE", text: "Your role here" },
  { tabName: "WEBSITE", text: "Your website", href: "" },
  { tabName: "INVENTNEXUS PAGE", text: "Your InventNexus page", href: "" },
  { tabName: "LOCATION", text: "Your location here" },
  {
    tabName: "BIO",
    text: "Your bio here. Add details about your interests, skills, and achievements.",
  },
];

const Tab = ({ tabName, text }) => (
  <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm transition-all hover:shadow-md">
    <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-200 pb-2">
      {tabName}
    </h2>
    <p className="mt-2 text-gray-700 break-words">{text}</p>
  </div>
);

const TabLink = ({ tabName, text, hRef }) => (
  <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm transition-all hover:shadow-md">
    <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-200 pb-2">
      {tabName}
    </h2>
    <Link
      href={hRef}
      className="mt-2 text-blaze-orange-700 hover:text-blaze-orange-800 transition-colors"
    >
      {text}
    </Link>
  </div>
);

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <PageName pageName="PROFILE" /> 
      <p className="mt-4 text-gray-600 text-lg">Welcome to your profile</p>
      <div className="w-full max-w-md sm:max-w-lg mt-6 px-4">
        <div className="relative w-48 h-48 mx-auto mb-6 border-4 border-blaze-orange-500 rounded-full overflow-hidden">
          <Image
            src="/leonardo-da-vinci-quote-2.png"
            fill
            alt="Profile picture"
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 192px"
            priority
          />
        </div>

        {profileTabs.map((tab, index) =>
          tab.href ? (
            <TabLink
              key={index}
              tabName={tab.tabName}
              text={tab.text}
              href={tab.href}
            />
          ) : (
            <Tab key={index} tabName={tab.tabName} text={tab.text} />
          )
        )}

        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-200 pb-2">
            SOCIAL MEDIA
          </h2>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {socialMediaLinks.map(({ Icon, name, href }, index) => (
              <SocialMediaLink
                key={index}
                Icon={(props) => (
                  <Icon {...props} className="text-blaze-orange-700" />
                )}
                Name={name}
                Href={href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
