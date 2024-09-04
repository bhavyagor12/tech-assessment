import { TABS } from "@/constants";
import { Flex } from "@radix-ui/themes";
import React from "react";
import TabButton from "./TabButton";
import ProfileButton from "./ProfileButton";

const styles = {
  header: "w-full h-[72px]",
  button:
    "border-transparent-light h-[32px] w-[121.6px] rounded-[8px] border-[1px] bg-transparent text-[16px] text-white",
  nav: "hidden lg:flex items-start justify-start",
  button1:
    "hidden lg:block mr-[10px] h-[40px] w-[112px] rounded-[32px] border-[2px] border-primary-light text-[14px] text-text-secondary max-sm:hidden",
  span: "text-white text-[16px]",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Flex
        direction={"row"}
        align="center"
        justify="between"
        gap="4"
        flexGrow={"1"}
        width={"80%"}
        height={"100%"}
      >
        <Flex direction="row" align="center" gap="4">
          <button className={styles.button}>Logo</button>
          <nav className={styles.nav}>
            {TABS.map((tab, index) => (
              <TabButton
                key={index}
                title={tab.title}
                link={tab.link}
                isActive={2 === index}
              />
            ))}
          </nav>
        </Flex>
        <Flex direction="row" align="center" gap="1">
          <button className={styles.button1}>How It Works</button>
          <ProfileButton />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
