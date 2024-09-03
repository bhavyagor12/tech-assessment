import { Flex } from "@radix-ui/themes";

const HowToEarn = () => {
  return (
    <Flex direction="column" width={"100%"} gap="4">
      <div className="flex flex-wrap items-center justify-between">
        <p className="text-text-primary">
          How to Earn: 
          <span className="text-text-secondary">
            Complete the actions for the badge, no specific order needed.
          </span>
        </p>
        <div className="flex items-center gap-2">
          <div className="bg-dark-ele3 w-[85px] h-[17px] text-center" style={{borderRadius:"24px"}}>
          <p className="text-text-secondary text-[12px]">1/3</p>
          </div>
          <p>Total Earnings</p>
        </div>
      </div>
      <div></div>
    </Flex>
  );
};

export default HowToEarn;
