"use client";

import cx from "classnames";
import { useState } from "react";
import Image from "next/image";
import AvatarIcon from "../../public/Avatar.svg"; // Adjust this import path
import { ExitIcon } from "@radix-ui/react-icons";

const styles = {
  container: (isOpen: boolean) =>
    cx(
      "relative h-[40px] w-[120px] items-center bg-dark-ele3 text-[14px]",
      isOpen ? "rounded-t-[12px]" : "rounded-[12px]",
    ),
  button: (isOpen: boolean) =>
    cx(
      "flex h-[32px] w-[112px] items-center justify-center rounded-[12px] text-white",
      isOpen ? "bg-dark" : "bg-dark-ele3",
    ),
  image: "mr-[8px] h-[18px] w-[18px] rounded-[32px]",
  dropdown: (isOpen: boolean) =>
    cx(
      "absolute right-0 w-full rounded-b-[12px] bg-dark-ele3",
      !isOpen ? "hidden" : "",
    ),
  dropdownList: "dark:text-gray-200 py-2 text-sm text-white",
  dropdownItem: "align-center w-full",
  dropdownText: "w-full flex items-center justify-center gap-2 text-center",
};

const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container(isOpen)}>
      <div className="flex h-full items-center justify-center">
        <button
          className={styles.button(isOpen)}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src={AvatarIcon}
            alt="Avatar"
            width={18}
            height={18}
            className={styles.image}
          />
          bongo.eth
        </button>
      </div>
      <div className={styles.dropdown(isOpen)}>
        <ul className={styles.dropdownList}>
          <li>
            <a
              className={styles.dropdownItem}
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className={styles.dropdownText}>
                Sign Out
                <ExitIcon />
                </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileButton;
