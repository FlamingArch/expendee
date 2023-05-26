import React from "react";
import { ChipProps } from "../types/chip";

export default function Chip({
  label,
  Icon,
  trailing,
  color,
  style,
  className,
}: ChipProps) {
  return (
    <div
      style={{
        backgroundColor: color ?? "#0066FF",
        ...style,
      }}
      className={
        "flex items-center gap-1 rounded-full p-1 px-3 text-[12px] font-bold text-black " +
        className
      }
    >
      {Icon && <Icon className="w-4 h-4" />}
      <p>{label}</p>
      {trailing}
    </div>
  );
}
