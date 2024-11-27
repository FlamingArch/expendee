import { Outlet } from "react-router-dom";
import useAppStore from "../store";
import constants from "../constants.json";
import Sidebar from "../views/Sidebar";

export default function PageHome() {
  const sidebarWidth = useAppStore((state) => state.sidebarWidth);

  return (
    <>
      <Sidebar width={sidebarWidth}>
        <p className="branding text-2xl">{constants.appName}</p>
      </Sidebar>
      <Outlet />
    </>
  );
}
