import { create } from "zustand";

type AppStoreProps = {
  sidebarVisibility: "expanded" | "collapsed" | "hidden";
};

const useAppStore = create<AppStoreProps>((set) => ({
  sidebarVisibility: "expanded",
}));

export default useAppStore;
