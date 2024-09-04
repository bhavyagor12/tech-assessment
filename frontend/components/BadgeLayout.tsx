"use client";
import { StaticImageData } from "next/image";
import Badge from "./Badge";
import { COMMUNITY_BADGES } from "@/constants";
import { useHomePageData } from "./DataProvider";

const styles = {
  container: "flex flex-col w-full flex-1 p-2",
  header:
    "rounded-t-[12px] border-b-[2px] border-b-dark bg-dark-ele3 p-2 text-white",
  headerText: "text-text-primary text-[12px] ml-2",
  badgeWrapper:
    "flex flex-wrap md:flex-nowrap items-center md:justify-start gap-2 overflow-x-auto max-w-full ml-2 mt-2 no-scrollbar",
};

const BadgeLayout = () => {
  const { setActiveBadge } = useHomePageData();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.headerText}>Community Badges</p>
      </div>
      <div className={styles.badgeWrapper}>
        {COMMUNITY_BADGES.map((badge, index) => (
          <div onClick={() => setActiveBadge(index)} key={index}>
            <Badge
              title={badge.title}
              icon={badge.icon as StaticImageData}
              actions={badge.actions as string}
              value={badge.value}
              isActive={badge.isActive as boolean}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeLayout;
