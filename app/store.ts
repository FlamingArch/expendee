import { create } from "zustand";

type AppStoreProps = {
  sidebarExpanded: boolean;
  sidebarToggle: () => void;
};

const useAppStore = create<AppStoreProps>((set) => ({
  sidebarExpanded: true,
  sidebarToggle: () =>
    set((state) => ({ sidebarExpanded: !state.sidebarExpanded })),
}));

export default useAppStore;

//(typeof window !== 'undefined'? ( localStorage.getItem("sidebarExpanded") ?? "true") == "true") : true,
