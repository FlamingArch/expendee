import { Sidebar } from "../fragments";
import { Outlet } from "react-router-dom";
import React from "react";

export default function BaseLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
