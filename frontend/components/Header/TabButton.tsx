import cx from "classnames";
import Link from "next/link";

type TabButtonProps = {
  title: string;
  link: string;
  isActive: boolean;
};

const styles = {
  link: (isActive: boolean) =>
    cx(
      "md:px-4 py-2 rounded-md text-[16px] hover:text-primary-light",
      isActive ? "bg-gray-800 text-primary-light" : "bg-gray-700 text-white",
    ),
};

const TabButton = ({ title, link, isActive }: TabButtonProps) => {
  return (
    <Link className={styles.link(isActive)} href={link}>
      {title}
    </Link>
  );
};

export default TabButton;
