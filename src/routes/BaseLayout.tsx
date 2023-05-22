import { Sidebar } from "../fragments";
import { Outlet } from "@tanstack/router";
import React from "react";

export default function BaseLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
