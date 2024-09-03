"use client";
import { AvatarIcon, ExitIcon } from "@radix-ui/react-icons";
import cx from "classnames";
import { useState } from "react";

const styles = {
  profileButtonContainer:
    "relative h-[40px] w-[120px] items-center bg-dark-ele3 text-[14px]",
  profileButtonOpenState: "rounded-t-[12px] w-[128px] h-[48px]",
  profileButtonClosedState: "rounded-[12px]",
  profileButtonInnerWrapper: "flex h-full items-center p-2 justify-center",
  profileButtonBase:
    "flex h-[32px] w-[112px] items-center justify-center gap-4 rounded-[12px] text-white",
  profileButtonOpenStyle: "bg-dark",
  profileButtonClosedStyle: "bg-dark-ele3",
  profileImage: "mr-[8px] h-[18px] w-[18px] rounded-[32px]",
  dropdownMenu: "dark:text-gray-200 p-4 text-sm text-white",
  dropdownMenuItem: "align-center w-full",
  dropdownMenuItemText:
    "w-full text-center flex items-center justify-center gap-4",
};

const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cx(
        styles.profileButtonContainer,
        isOpen
          ? styles.profileButtonOpenState
          : styles.profileButtonClosedState,
      )}
    >
      <div className={styles.profileButtonInnerWrapper}>
        <button
          className={cx(
            styles.profileButtonBase,
            isOpen
              ? styles.profileButtonOpenStyle
              : styles.profileButtonClosedStyle,
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AvatarIcon className="h-20 w-20" />
          <p>bhavyagor.eth</p>
        </button>
      </div>
      <div
        className={cx(
          "absolute right-0 w-full rounded-b-[12px] bg-dark-ele3",
          !isOpen && "hidden",
        )}
      >
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownMenuItem}>
            <button
              className={styles.dropdownMenuItemText}
              onClick={() => setIsOpen(!isOpen)}
            >
              Sign Out
              <ExitIcon className="h-4 w-4" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileButton;
