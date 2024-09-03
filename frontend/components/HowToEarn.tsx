import { Flex } from "@radix-ui/themes";
import ActionCard from "./ActionCard";
import { ACTION_CARDS } from "@/constants";
import ProgressBar from "./ProgressBar";

const HowToEarn = () => {
  return (
    <Flex direction="column" gap="4">
      <div className="flex flex-wrap items-center justify-center md:justify-between">
        <p className="text-text-primary">
          How to Earn:{" "}
          <span className="text-text-secondary">
            Complete the actions for the badge, no specific order needed.
          </span>
        </p>
        <div className="flex items-center gap-2 w-full pt-2 md:w-auto">
          <div className="mr-[5px] flex h-[24px] w-[101px] items-center justify-center rounded-[32px] bg-dark-ele3 text-[12px] text-text-secondary max-md:grow">
            1/3 Completed
          </div>
          <div className="flex h-[24px] w-[138px] items-center justify-center rounded-[32px] bg-primary-dark text-[12px] text-primary-light max-md:grow">
            Total Earning: 3000
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
        {ACTION_CARDS.map((action, index) => (
          <ActionCard
            key={index}
            description={action.description}
            status={action.status}
          />
        ))}
      </div>
      <ProgressBar currentStep={1} totalSteps={3} />
    </Flex>
  );
};

export default HowToEarn;
