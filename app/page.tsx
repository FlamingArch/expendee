import Collapser from "@/components/collapser";
import Sidebar from "./sidebar";
import ButtonToggleSidebar from "./toggleSidebar";

export default function Home() {
  return (
    <>
      <Collapser width={330}>
        <Sidebar leading={<ButtonToggleSidebar />} />
      </Collapser>
      <div className="bg-gray-50 flex-grow"></div>
    </>
  );
}
