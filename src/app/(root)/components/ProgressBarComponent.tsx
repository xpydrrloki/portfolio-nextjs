import { Progress } from "@/components/ui/progress";
import React, { FC } from "react";

interface ProgressBarComponentProps{
    label: string
    value: number
    color?: string
    desc: string
}

const ProgressBarComponent:FC<ProgressBarComponentProps> = ({color,label,value, desc}) => {
  return (
    <div className="my-2 ">
      {/* progress bar template */}
      <div className="flex justify-between">
        <p>{label}</p>
        <p>{desc}</p>
      </div>
      <Progress
        value={value}
        className="h-1 border-theme-third_gray border"
        indicatorColor={color||""}
      />
    </div>
  );
};

export default ProgressBarComponent;
