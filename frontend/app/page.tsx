import LastActivities from "@/components/ActivitySection";
import HowToEarn from "@/components/HowToEarn";

export default function Home() {
  return (
    <div className="flex flex-col justify-center pt-[40px]">
      <LastActivities />
      <HowToEarn />
    </div>
  );
}
