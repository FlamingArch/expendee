"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TabBarStyles =
  | "segmented"
  | "sidebar"
  | "sidebarGrouped"
  | "sidebarProminent"
  | "sidebarProminentGrouped";

const styles = {
  segmented: {
    tab: "grow flex items-center w-auto text-accent rounded-xl text-sm text-center gap-3 cursor-pointer p-2",
    selected: "bg-accent text-white",
  },
  sidebar: {
    tab: "grow flex items-center w-auto bg-accent-dimmed/20 rounded-xl text-sm gap-3 cursor-pointer p-3",
    selected: "bg-accent/100 text-white",
  },
  sidebarGrouped: {
    tab: "grow flex items-center w-auto rounded-xl text-sm gap-3 cursor-pointer p-3",
    selected: "bg-accent/100 text-white",
  },
  sidebarProminent: {
    tab: "grow flex items-center w-auto bg-accent-dimmed/20 rounded-xl text-sm gap-3 cursor-pointer p-3",
    selected: "bg-white text-black shadow-lg",
  },
  sidebarProminentGrouped: {
    tab: "grow flex items-center w-auto rounded-xl text-sm gap-3 cursor-pointer p-3",
    selected: "bg-white text-black shadow-lg",
  },
};

export default function Tab(props: {
  path: string;
  label: string;
  style: TabBarStyles;
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSelected = pathname === props.path;

  return (
    <Link
      href={props.path}
      className={`${styles[props.style ?? "segmented"].tab} ${
        isSelected ? styles[props.style ?? "segmented"].selected : ""
      }`}
    >
      {props.icon}
      <p className="flex-grow">{props.label}</p>
      {props.trailing && (
        <div className="text-text/80 text-sm">{props.trailing}</div>
      )}
    </Link>
  );
}
