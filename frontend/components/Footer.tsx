import React from "react";
import TabButton from "./Header/TabButton";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import AbsintheLogo from "../public/AbsintheLogo.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="mt-[20px] flex justify-center bg-dark-ele2">
      <div className="flex w-full items-center justify-center max-lg:px-6 max-sm:p-6 sm:h-[50px] lg:w-[1020px] xl:w-[1250px]">
        <div className="flex w-full items-center justify-between max-sm:flex-col">
          <div className="grow-1 flex items-center justify-between  max-sm:mb-6 max-sm:w-full">
            <div className="hidden max-sm:block">
              <button className="border-transparent-light h-[32px] w-[121.6px] rounded-[8px] border-[1px] bg-transparent text-[16px] text-white">
                Logo
              </button>
            </div>
            <div className="inline-flex items-center">
              <div className="pr-4">
                <DiscordLogoIcon className="text-[24px] text-text-primary" />
              </div>
              <div className="pr-4">
                <TwitterLogoIcon className="text-[24px] text-text-primary" />
              </div>
              <div className="hidden pr-4 max-sm:block">
                <InstagramLogoIcon className="text-[24px] text-text-primary" />
              </div>
              <div className="pr-4">
                <GitHubLogoIcon className="text-[24px] text-text-primary" />
              </div>
            </div>
          </div>
          <div className="mb-6 hidden w-full max-sm:block">
            <ul className="flex w-full  max-lg:justify-between">
              <TabButton title="Docs" link="/" isActive={false} />
              <TabButton title="Blog" link="/" isActive={false} />
              <TabButton title="Support" link="/" isActive={false} />
              <TabButton title="Terms & Conditions" link="/" isActive={false} />
            </ul>
          </div>
          <div className="grow-3 inline-block h-[35px] w-[211px]">
            <Image src={AbsintheLogo} alt="Absinthe Logo" width={300} />
          </div>
          <div className="grow-1 w-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
