"use client";
import { StaticImageData } from "next/image";
import Badge from "./Badge";
import { COMMUNITY_BADGES } from "@/constants";
import { useHomePageData } from "./DataProvider";

const BadgeLayout = () => {
  const { setActiveBadge } = useHomePageData();

  return (
    <div className="flex flex-col w-full flex-1 p-2">
      <div className="rounded-t-[12px] border-b-[2px] border-b-dark bg-dark-ele3 p-2 text-white">
        <p className="text-text-primary text-[12px] ml-2">Community Badges</p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-2 overflow-x-auto max-w-full p-2 no-scrollbar">
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
