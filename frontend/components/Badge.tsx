import cx from "classnames";
import Image, { StaticImageData } from "next/image";

interface BadgeProps {
  title: string;
  actions?: string;
  isActive: boolean;
  value: string;
  details?: string;
  icon: StaticImageData;
  hideContent?: boolean;
}

const styles = {
  container: (isActive: boolean) =>
    cx(
      "min-w-[178px] max-w-[178px] mb-4 flex flex-col justify-between rounded-[12px] border-[2px]",
      isActive ? "border-states-success" : "border-none",
    ),
  header:
    "flex h-[32px] items-center justify-between rounded-t-[12px] bg-dark-ele2 p-2",
  content: "flex h-[112px] items-center justify-center bg-dark-ele3",
  footer:
    "flex h-[32px] items-center justify-center rounded-b-[12px] bg-states-success-ele1 text-center text-[12px] text-states-success",
  detailsContainer: (hideContent: boolean) =>
    `relative flex flex-col h-[52px] items-center justify-center bg-dark-ele2 text-center text-[10px] text-text-secondary rounded-[8px] mt-2 ${hideContent ? "blur-sm pointer-events-none" : ""
    }`,
  detailsHeader: "text-[12px] text-text-primary w-[146px]",
  detailsText: "text-[12px] text-text-secondary leading-[18px] w-[146px]",
  textWhite: "text-xs text-white",
};

const Badge = ({
  title,
  actions,
  icon,
  isActive,
  value,
  details,
  hideContent,
}: BadgeProps) => {
  return (
    <div className={styles.container(isActive)}>
      {!hideContent && (
        <div className={styles.header}>
          <div className={styles.textWhite}>{title}</div>
          {actions && <div className={styles.textWhite}>{actions}</div>}
        </div>
      )}
      <div className={styles.content}>
        <Image
          src={icon}
          height={64}
          width={64}
          alt="badge"
          className="rounded-[50%]"
        />
      </div>
      <div className={styles.footer}>
        <div>{value}</div>
      </div>
      {details && (
        <div className={styles.detailsContainer(hideContent as boolean)}>
          <p className={styles.detailsHeader}>Reward Details</p>
          <p className={styles.detailsText}>{details}</p>
        </div>
      )}
    </div>
  );
};

export default Badge;
