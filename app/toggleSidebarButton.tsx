"use client";

import Button from "@/views/Button";
import { FiSidebar } from "react-icons/fi";
import useAppStore from "./store";
import { useShallow } from "zustand/shallow";

export default function ToggleSidebarButton() {
  const { toggle } = useAppStore(
    useShallow((state) => ({ toggle: state.sidebarToggle }))
  );
  return (
    <Button icon={FiSidebar} iconClassName="stroke-[1.5]" onClick={toggle} />
  );
}
