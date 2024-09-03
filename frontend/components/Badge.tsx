import cx from "classnames";
import badgeIcon from "../public/badges.svg";
import Image from "next/image";
type BadgeProps = {
  title: string;
  actions?: string;
  isActive: boolean;
  value: string;
};

const styles = {
  container: (isActive: boolean) =>
    cx(
      "min-w-[178px] h-[176px] mx-1 mb-4 flex flex-col justify-between rounded-[12px] border-[2px]",
      isActive ? "border-states-success" : "border-none",
    ),
  header:
    "flex h-[32px] items-center justify-between rounded-t-[12px] bg-dark-ele2 px-1",
  content: "flex h-[112px] items-center justify-center bg-dark-ele3",
  footer:
    "flex h-[32px] items-center justify-center rounded-b-[12px] bg-states-success-ele1 text-center text-[12px] text-states-success",
  textWhite: "text-xs text-white",
};

const Badge = ({ title, actions, isActive, value }: BadgeProps) => {
  return (
    <div className={styles.container(isActive)}>
      <div className={styles.header}>
        <div className={styles.textWhite}>{title}</div>
        {actions && <div className={styles.textWhite}>{actions}</div>}
      </div>
      <div className={styles.content}>
        <Image src={badgeIcon} height={64} width={64} alt="badge" />
      </div>
      <div className={styles.footer}>
        <div>{value}</div>
      </div>
    </div>
  );
};

export default Badge;
