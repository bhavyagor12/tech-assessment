import LastActivities from "@/components/ActivitySection";
import BadgeLayout from "@/components/BadgeLayout";
import HowToEarn from "@/components/HowToEarn";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center lg:w-[1020px] xl:w-[1250px] gap-8">
      <LastActivities />
      <HowToEarn />
      <BadgeLayout />
    </div>
  );
}
