"use client";

import { IconCollapseSidebar } from "@/components/Icons";
import { useAppStore } from "@/store";
import React from "react";

export default function ButtonToggleSidebar({
  color = "dark",
}: {
  color: "dark" | "light";
}) {
  const { visible, toggle } = useAppStore((state) => ({
    visible: state.sidebarVisible,
    toggle: state.toggleSidebar,
  }));
  return (
    <button
      onClick={toggle}
      className={`ml-auto p-4 -m-2 rounded-xl hover:bg-${
        color == "dark" ? "white" : "black"
      } hover:bg-opacity-10 transition`}
    >
      <IconCollapseSidebar
        className={`w-5 h-5 stroke-${color == "dark" ? "white" : "black"}`}
      />
    </button>
  );
}
