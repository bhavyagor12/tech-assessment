import cx from "classnames";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const styles = {
  bar: "h-4 transition-all flex-1",
  filled: "bg-primary",
  empty: "bg-dark-ele3",
  container: "flex items-center gap-1 overflow-hidden",
  rounded: {
    borderRadius: "8px",
    height: "4.35px",
  },
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={cx(styles.bar, {
            [styles.filled]: index < currentStep,
            [styles.empty]: index >= currentStep,
          })}
          style={styles.rounded}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
