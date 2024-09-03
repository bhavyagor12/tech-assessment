interface ActionCardProps {
  description: string;
  status?: boolean;
}

const styles = {
  container:
    "w-[384px] h-[70px] pb-[16px] bg-dark-ele2 rounded-content flex flex-col justify-start items-center gap-[8px]",
  headingContainer:
    "self-stretch h-[36px] px-[16px] py-[8px] bg-dark-ele3 rounded-t-content border-b border-dark-ele1 flex justify-between items-center",
  titleContainer: "h-[24px] flex items-center gap-[8px]",
  titleText: "text-text-secondary text-[14px] font-medium leading-[20px]",
  statusContainer:
    "w-[80px] h-[24px] px-[8px] py-[4px] bg-[#27D17F1A] flex justify-center items-center gap-[8px]",
  statusText: "text-success text-[12px] font-medium leading-[16.8px]",
  descriptionContainer:
    "self-stretch px-[16px] flex justify-center items-center gap-[8px]",
  descriptionText:
    "flex-1 text-text-secondary text-[14px] font-normal leading-[20px]",
};

const ActionCard: React.FC<ActionCardProps> = ({ description, status }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.titleText}>Action</div>
        </div>
        {status && (
          <div
            className={styles.statusContainer}
            style={{ borderRadius: "24px" }}
          >
            <div className="text-[#27D17F] text-[12px] font-medium leading-[16.8px]">
              Completed
            </div>
          </div>
        )}
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionText}>{description}</div>
      </div>
    </div>
  );
};
export default ActionCard;
