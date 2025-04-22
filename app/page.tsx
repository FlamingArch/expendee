import Page from "@/views/Page";
import Toolbar from "@/views/Toolbar";
import ToggleSidebarButton from "./toggleSidebarButton";

function ToolbarOverview() {
  return (
    <Toolbar position="top" leading={<ToggleSidebarButton />}>
      <p className="text-xl p-3">Overview</p>
    </Toolbar>
  );
}

export default function PageOverview() {
  return <Page className="grow" toolbar={<ToolbarOverview />}></Page>;
}
