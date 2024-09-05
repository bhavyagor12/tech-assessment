import React from "react";
import TabButton from "./Header/TabButton";
import AbsintheLogo from "../public/AbsintheLogo.svg";
import Image from "next/image";
import DiscordLogo from "../public/discord.svg";
import TwitterLogo from "../public/twitter.svg";
import InstagramLogo from "../public/instagram.svg";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import LogoButton from "./LogoButton";

const styles = {
  container: "mt-[20px] flex justify-center bg-dark-ele2",
  innerContainer:
    "flex w-full items-center justify-center max-lg:px-6 max-sm:p-6 sm:h-[50px] lg:w-[1020px] xl:w-[1250px]",
  content: "flex w-full items-center justify-between max-sm:flex-col",
  logoButton:
    "hidden max-sm:block border-transparent-light h-[32px] w-[121.6px] rounded-[8px] border-[1px] bg-transparent text-[16px] text-white",
  socialIcons: "inline-flex items-center",
  socialIcon: "pr-4",
  hiddenIcon: "hidden pr-4 max-sm:block",
  footerLinks: "mb-6 hidden w-full max-sm:block",
  linkList: "flex w-full max-lg:justify-between",
  logo: "grow-3 inline-block h-[35px] w-[211px]",
  spacer: "grow-1 w-[100px]",
  logosContainer:
    "grow-1 flex items-center justify-between max-sm:mb-6 max-sm:w-full",
};

const FOOTER_NAV = ["Docs", "Blog", "Support", "Terms & Conditions"];

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <div className={styles.logosContainer}>
            <div className={styles.logoButton}>
              <LogoButton />
            </div>
            <div className={styles.socialIcons}>
              <div className={styles.socialIcon}>
                <Image
                  src={DiscordLogo}
                  alt="Discord Logo"
                  width={24}
                  height={24}
                />
              </div>
              <div className={styles.socialIcon}>
                <Image
                  src={TwitterLogo}
                  alt="Twitter Logo"
                  width={24}
                  height={24}
                />
              </div>
              <div className={styles.hiddenIcon}>
                <Image
                  src={InstagramLogo}
                  alt="Instagram Logo"
                  width={24}
                  height={24}
                />
              </div>
              <div className={styles.socialIcon}>
                <GitHubLogoIcon width={24} height={24} className="text-white" />
              </div>
            </div>
          </div>
          <nav className={styles.footerLinks}>
            <ul className={styles.linkList}>
              {FOOTER_NAV.map((link, index) => (
                <TabButton title={link} link="/" isActive={false} key={index} />
              ))}
            </ul>
          </nav>
          <div className={styles.logo}>
            <Image src={AbsintheLogo} alt="Absinthe Logo" width={300} />
          </div>
          <div className={styles.spacer}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
