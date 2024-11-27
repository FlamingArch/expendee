import { create } from "zustand";

type AppStoreProps = {
  appName: string;
  sidebarWidth: "full" | number | null;
};

const useAppStore = create<AppStoreProps>((set) => ({
  appName: "Expendee",
  sidebarWidth: null,
}));

export default useAppStore;
