import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const PageName = ({ pageName }) => {
  return (
    <div className="flex w-20 h-10 items-center justify-left px-2 text-center font-bold text-xl border-gray-300">
      <div>
        <ChevronDoubleRightIcon className="w-4 h-3 text-blaze-orange-950" />
      </div>
      <div className="text-blaze-orange-600 pl-2">{pageName}</div>
    </div>
  );
};

export const SocialMediaLink = ({ Name, Icon, Href }) => {
  return (
    <div className="container h-12 flex items-center m-auto">
      <Link
        href={Href}
        className="text-black hover:underline hover:text-blaze-orange-600 on-active:text-blaze-orange-600 font-semibold flex justify-items-center my-auto items-center gap-2"
      >
        {Name}
        <Icon />
      </Link>
    </div>
  );
};

export const CustomLink = ({ Href, Text }) => {
  return (
    <Link
      href={Href}
      className="text-black hover:underline hover:text-blaze-orange-600  active:text-blaze-orange-600"
    >
      {Text}
    </Link>
  );
};
