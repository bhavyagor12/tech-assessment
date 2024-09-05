import React from "react";

type Props = {
  text: string;
};

const SuccessBadge = ({text}: Props) => {
  return <div className="inline-flex h-[24px] items-center rounded-[24px] bg-states-success-ele1 px-2 text-[12px] text-states-success">{text}</div>;
};

export default SuccessBadge;
