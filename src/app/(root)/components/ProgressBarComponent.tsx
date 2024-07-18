import { Progress } from "@/components/ui/progress";
import React, { FC } from "react";

interface ProgressBarComponentProps{
    label: string
    value: number
    color?: string
}

const ProgressBarComponent:FC<ProgressBarComponentProps> = ({color,label,value}) => {
  return (
    <div className="my-2 ">
      {/* progress bar template */}
      <div className="flex justify-between">
        <p>{label}</p>
        <p>{value}%</p>
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
