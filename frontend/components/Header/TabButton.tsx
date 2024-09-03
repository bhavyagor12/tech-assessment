import cx from "classnames";
import Link from "next/link";

type TabButtonProps = {
  title: string;
  link: string;
  isActive: boolean;
};

const TabButton = ({ title, link, isActive }: TabButtonProps) => {
  return (
    <Link
      className={cx(
        "px-4 py-2",
        isActive ? "bg-gray-800" : "bg-gray-700",
        isActive ? "text-primary-light" : "text-white",
        "rounded-md",
        "font-[14px]",
        "hover:text-primary-light",
      )}
      href={link}
    >
      {title}
    </Link>
  );
};
export default TabButton;
