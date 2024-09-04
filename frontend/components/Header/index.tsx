import { TABS } from "@/constants";
import { Flex } from "@radix-ui/themes";
import TabButton from "./TabButton";
import ProfileButton from "./ProfileButton";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const styles = {
  header: "flex items-center justify-center w-full h-[72px] max-lg:px-6",
  button:
    "border-transparent-light h-[32px] w-[121.6px] rounded-[8px] border-[1px] bg-transparent text-[16px] text-white",
  nav: "bg-transparent-dark max-lg:absolute max-lg:inset-x-0 max-lg:top-[90px] max-lg:hidden max-lg:rounded-[12px] max-lg:bg-dark-ele1 max-lg:p-4",
  button1:
    "hidden lg:block mr-[10px] h-[40px] w-[112px] rounded-[32px] border-[2px] border-primary-light text-[14px] text-text-secondary max-sm:hidden",
  span: "text-white text-[16px]",
  popoverContent: "flex items-start p-4 bg-black ",
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
        width={"100%"}
        height={"100%"}
        style={{ maxWidth: "1250px" }}
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
          <HamburgerMenuIcon
            width={24}
            height={24}
            className="text-text-secondary block md:hidden"
          />
        </Flex>
      </Flex>
    </header>
  );
};
export default Header;
