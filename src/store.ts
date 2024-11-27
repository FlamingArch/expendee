import { create } from "zustand";

type AppStoreProps = {
  sidebarWidth: "full" | number | null;
  fullSidebar: (val: boolean) => void;
};

const useAppStore = create<AppStoreProps>((set) => ({
  sidebarWidth: null,
  fullSidebar: (val: boolean) => {
    val ? set({ sidebarWidth: "full" }) : set({ sidebarWidth: null });
  },
}));

export default useAppStore;
