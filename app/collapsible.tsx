"use client";

import { useShallow } from "zustand/shallow";
import useAppStore from "./store";
import Drawer from "@/views/Drawer";

type CollapsibleProps = {
  children: React.ReactNode;
  width: number;
};

export default function Collapsible({ children, width }: CollapsibleProps) {
  const { expanded, toggle } = useAppStore(
    useShallow((state) => ({
      expanded: state.sidebarExpanded,
      toggle: state.sidebarToggle,
    }))
  );
  return (
    <Drawer expanded={expanded} setExpanded={toggle}>
      <div
        style={{
          width: expanded ? width : 0,
        }}
        className="flex flex-row-reverse grow-0 shrink-0 transition-[width] overflow-hidden"
      >
        {children}
      </div>
    </Drawer>
  );
}
