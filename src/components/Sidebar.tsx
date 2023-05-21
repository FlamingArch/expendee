import React from "react";
import { IconProps } from "@/src/types/Icon";
import Link from "next/link";
import Button from "./Button";

type SidebarProps = {
  children: React.ReactNode;
  leading: React.ReactNode;
  width: number | string;
};

type SidebarLinkProps = {
  href: string;
  label?: string;
  Icon?: React.FunctionComponent<IconProps>;
  className?: string;
  selected?: boolean | string;
};

type SidebarLinkGroupProps = {
  children: React.ReactNode;
};

type SidebarHeaderProps = {
  heading?: string;
  children?: React.ReactNode;
};

function Sidebar({ children, leading, width }: SidebarProps) {
  return (
    <div
      className="relative flex flex-col p-4 gap-4 h-screen w-full hover:overflow-y-scroll bg-black backdrop-blur-xl bg-opacity-60 border-r border-gray-200 dark:border-gray-800 overflow-hidden"
      style={{ width: width }}
    >
      <div className="p-1 flex sticky z-10 -top-4 -m-4">{leading}</div>
      {children}
    </div>
  );
}

function SidebarLink({
  href,
  label,
  Icon,
  className,
  selected,
}: SidebarLinkProps) {
  const getIsSelected = React.useCallback(() => {
    let active;
    if (typeof selected == "string") {
      active = !!selected;
    } else {
      active = selected;
    }
    return active;
  }, []);

  const active = getIsSelected();

  return (
    <Link href={href} className="flex flex-col">
      <Button
        className={`flex-grow ${label ? "" : "w-fit"} ${className}`}
        buttonStyle={active ? "navLinkSelected" : "navLink"}
        label={label}
        Icon={Icon}
      />
    </Link>
  );
}

function SidebarLinkGroup({ children }: SidebarLinkGroupProps) {
  return (
    <div className="flex flex-col rounded-2xl flex-shrink-0 overflow-hidden backdrop-blur-lg backdrop-saturate-[1.125]">
      {children}
    </div>
  );
}

function SidebarHeader({ children, heading }: SidebarHeaderProps) {
  return (
    <div className="flex gap-4 items-center">
      <p className="uppercase font-bold">{heading}</p>
      <div className="flex-grow" />
      {children}
    </div>
  );
}

const SidebarExport = {
  View: Sidebar,
  Header: SidebarHeader,
  Link: SidebarLink,
  LinkGroup: SidebarLinkGroup,
};

export default SidebarExport;
