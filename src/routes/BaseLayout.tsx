import { Outlet } from "react-router-dom";
import { Sidebar } from "../fragments";

export default function BaseLayout() {
  return (
    <>
      <Sidebar />
      {/* <Outlet /> */}
    </>
  );
}
