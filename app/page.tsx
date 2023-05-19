import Collapser from "@/components/collapser";
import Sidebar from "./sidebar";
import ButtonToggleSidebar from "./toggleSidebar";

export default function Home() {
  return (
    <>
      <Collapser width={330}>
        <Sidebar
          leading={
            <ButtonToggleSidebar
              hideOnHidden
              color="dark"
              className="ml-auto"
            />
          }
        />
      </Collapser>
      <div
        className="bg-gray-50 text-black border-r-2 border-gray-200"
        style={{ width: 350 }}
      >
        <div className="flex p-1 gap-1">
          <ButtonToggleSidebar color="light" hideOnVisible />
        </div>
      </div>
      <div className="bg-gray-50 flex-grow text-black border-r-2 border-gray-200">
        <div className="flex p-1 gap-1"></div>
      </div>
    </>
  );
}
