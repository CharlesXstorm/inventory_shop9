import { create } from "zustand";

interface storeProps {
  clickedID: string | null;
  setClickedID: (clickID?: string | null) => void;
  displayMenu: boolean;
  setDisplayMenu: (display: boolean) => void;
}

export const useStore = create<storeProps>((set) => ({
  clickedID: null,
  setClickedID: (clickID?) => set({ clickedID: clickID }),
  displayMenu: false,
  setDisplayMenu: (display) => set({ displayMenu: display })
}));
