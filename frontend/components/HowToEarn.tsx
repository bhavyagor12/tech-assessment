import { Flex } from "@radix-ui/themes";
import ActionCard from "./ActionCard";
import { ACTION_CARDS } from "@/constants";
import ProgressBar from "./ProgressBar";
import SwiperComponent from "./Swiper";

const styles = {
  container: "max-lg:px-6",
  title: "text-[16px] leading-4 font-medium mb-2 text-text-secondary",
  description: "text-text-primary text-[14px]",
  highlight: "text-text-secondary",
  badgeWrapper:
    "flex flex-wrap items-center justify-center md:justify-between ml-4",
  badge:
    "mr-[5px] flex h-[24px] w-[138px] items-center justify-center rounded-[32px] text-[12px] max-md:grow",
  badgeCompleted: "bg-dark-ele3 text-text-secondary",
  badgeTotal: "bg-primary-dark text-primary-light",
  actionCardsWrapper:
    "flex flex-wrap items-center justify-center md:justify-start gap-2 ml-4",
  progressWrapper: "ml-4",
};

const HowToEarn = () => {
  return (
    <Flex direction="column" width="100%" gap="4" className={styles.container}>
      <h2 className={styles.title}>Badges</h2>
      <SwiperComponent />
      <div className={styles.badgeWrapper}>
        <p className={styles.description}>
          How to Earn:{" "}
          <span className={styles.highlight}>
            Complete the actions for the badge, no specific order needed.
          </span>
        </p>
        <div className="flex items-center gap-2 w-full pt-2 md:w-auto">
          <div className={`${styles.badge} ${styles.badgeCompleted}`}>
            1/3 Completed
          </div>
          <div className={`${styles.badge} ${styles.badgeTotal}`}>
            Total Earning: 3000
          </div>
        </div>
      </div>
      <div className={styles.actionCardsWrapper}>
        {ACTION_CARDS.map((action, index) => (
          <ActionCard
            key={index}
            description={action.description}
            status={action.status}
          />
        ))}
      </div>
      <div className={styles.progressWrapper}>
        <ProgressBar currentStep={1} totalSteps={3} />
      </div>
    </Flex>
  );
};

export default HowToEarn;
