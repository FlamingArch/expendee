import { Outlet } from "react-router-dom";
import useAppStore from "../store";
import Sidebar from "../views/Sidebar";

export default function PageHome() {
  const appName = useAppStore((state) => state.appName);
  const sidebarWidth = useAppStore((state) => state.sidebarWidth);

  return (
    <>
      <Sidebar width={sidebarWidth}>
        <p className="branding text-2xl">{appName}</p>
      </Sidebar>
      <Outlet />
    </>
  );
}
