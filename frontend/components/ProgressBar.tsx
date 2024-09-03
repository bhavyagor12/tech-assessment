import cx from "classnames";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex items-center gap-1 overflow-hidden">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={cx(
            "h-4 transition-all flex-1",
            index < currentStep ? "bg-primary" : "bg-dark-ele3",
          )}
          style={{ borderRadius: "8px", height: "4.35px" }}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
