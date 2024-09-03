import LastActivities from "@/components/ActivitySection";
import BadgeLayout from "@/components/BadgeLayout";
import HowToEarn from "@/components/HowToEarn";

export default function Home() {
  return (
    <div className="flex min-w-[488px] justify-center">
      <div className="flex w-full flex-col items-center justify-center max-lg:px-6 lg:w-[1020px] xl:w-[1250px]">
        <LastActivities />
        <HowToEarn />
        <BadgeLayout />
      </div>
    </div>
  );
}
