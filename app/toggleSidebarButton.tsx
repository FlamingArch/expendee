"use client";

import Button from "@/views/Button";
import { FiSidebar } from "react-icons/fi";
import useAppStore from "./store";
import { useShallow } from "zustand/shallow";

export default function ToggleSidebarButton({
  inSidebar = false,
}: {
  inSidebar?: boolean;
}) {
  const { toggle, visible } = useAppStore(
    useShallow((state) => ({
      toggle: state.sidebarToggle,
      visible: state.sidebarExpanded,
    }))
  );
  let isVisible = inSidebar ? visible : !visible;
  return !isVisible ? (
    <></>
  ) : (
    <Button
      icon={FiSidebar}
      className={inSidebar ? "hover:bg-white/20" : ""}
      iconClassName={"stroke-[1.5] " + (inSidebar ? "text-white " : "")}
      onClick={toggle}
    />
  );
}
