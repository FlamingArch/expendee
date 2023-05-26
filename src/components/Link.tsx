import { LinkProps } from "../types/link";
import { Link } from "react-router-dom";
import React from "react";

export default function CustomLink({
  href,
  children,
  className,
  style,
}: LinkProps) {
  return (
    //@ts-expect-error
    <Link href={href} to={href} className={className} style={style}>
      {children}
    </Link>
  );
}
