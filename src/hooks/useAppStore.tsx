import { create } from "zustand";

type AppStoreType = {
  navigationVisible: boolean;
  toggleNavigation: () => void;
};

const useAppStore = create<AppStoreType>((set) => ({
  navigationVisible: true,
  toggleNavigation: () =>
    set((state) => ({ navigationVisible: !state.navigationVisible })),
}));

export default useAppStore;
