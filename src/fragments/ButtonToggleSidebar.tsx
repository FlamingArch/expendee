"use client";

import { IconCollapseSidebar } from "@/src/components/Icons";
import { useAppStore } from "@/src/store";
import React from "react";

export default function ButtonToggleSidebar({
  color,
  className,
  hideOnVisible,
  hideOnHidden,
}: {
  color?: "dark" | "light";
  className?: string;
  hideOnHidden?: boolean;
  hideOnVisible?: boolean;
}) {
  const { visible, toggle } = useAppStore((state) => ({
    visible: state.sidebarVisible,
    toggle: state.toggleSidebar,
  }));

  if (hideOnVisible && visible) return <></>;
  if (hideOnHidden && !visible) return <></>;

  const fill = color === "dark" ? "black" : "white";
  const stroke = color === "dark" ? "white" : "black";

  return (
    <button
      onClick={toggle}
      className={`p-4 rounded-xl hover:bg-${fill} hover:bg-opacity-10 transition ${className}`}
    >
      <IconCollapseSidebar style={{ stroke: stroke }} className={`w-5 h-5`} />
    </button>
  );
}
