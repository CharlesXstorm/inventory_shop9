import { create } from "zustand";

interface storeProps {
  clickedID: string | null;
  setClickedID: (clickID?: string | null) => void;
}

export const useStore = create<storeProps>((set) => ({
  clickedID: null,
  setClickedID: (clickID?) => set({ clickedID: clickID }),
}));
