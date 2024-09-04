import Badge from "./Badge";
import { COMMUNITY_BADGES } from "@/constants";

const BadgeLayout = () => {
  return (
    <div className="flex flex-col w-full flex-1 p-2">
      <div className="rounded-t-[12px] border-b-[2px] border-b-dark bg-dark-ele3 p-2 text-white">
        <p className="text-text-primary text-[12px] ml-2">Community Badges</p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-2 overflow-x-auto max-w-full p-2 no-scrollbar">
        {COMMUNITY_BADGES.map((badge, index) => (
          <Badge
            key={index}
            title={badge.title}
            actions={badge.actions}
            value={badge.value}
            isActive={badge.isActive as boolean}
          />
        ))}
      </div>
    </div>
  );
};

export default BadgeLayout;
