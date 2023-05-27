import React from "react";
import { Button, Link } from ".";
import { SidebarLinkProps } from "../types/sidebarLink";

export default function SidebarLink({
  href,
  label,
  Icon,
  selected,
  className,
  style,
}: SidebarLinkProps) {
  return (
    <Link href={href}>
      <Button
        buttonStyle={selected ? "navLinkSelected" : "navLink"}
        label={label}
        Icon={Icon}
        className={`${label ? "w-full" : "w-fit"} ${className}`}
        style={style}
      />
    </Link>
  );
}