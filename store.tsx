import { create } from "zustand";

export const useAppStore = create<{
  sidebarVisible: boolean;
  toggleSidebar: () => void;
}>((set) => ({
  sidebarVisible: true,
  toggleSidebar: () =>
    set((state) => ({ sidebarVisible: !state.sidebarVisible })),
}));
