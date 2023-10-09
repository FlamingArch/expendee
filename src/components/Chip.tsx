import React from "react";
import { ChipProps } from "../types/chip";

export default function Chip({
  label,
  Icon,
  trailing,
  color,
  style,
  className,
  chipStyle,
  ...rest
}: ChipProps) {
  const chipStyleProp = chipStyle ?? "primary";
  return (
    <button
      style={{
        backgroundColor:
          color ?? (chipStyleProp == "primary" ? "#0066FF" : "#0066FF22"),
        color: chipStyleProp == "primary" || color ? undefined : "#0066FF",
        fill: chipStyleProp == "primary" || color ? undefined : "#0066FF",
        ...style,
      }}
      className={
        "flex items-center gap-1 rounded-full p-1 px-3 text-[12px] font-bold text-black hover:brightness-110 " +
        className
      }
      {...rest}
    >
      {Icon && (
        <Icon
          style={{
            fill: chipStyleProp == "primary" || color ? undefined : "#0066FF",
          }}
          className="w-4 h-4"
        />
      )}
      <p>{label}</p>
      {trailing}
    </button>
  );
}
