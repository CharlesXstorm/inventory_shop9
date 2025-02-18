import { create } from "zustand";

interface storeProps {
  clickedID: string | null;
  setClickedID: (clickID?: string | null) => void;
  displayMenu: boolean;
  setDisplayMenu: (display: boolean) => void;
  itemView: boolean | null;
  setItemView: (view: boolean | null) => void;
}

export const useStore = create<storeProps>((set) => ({
  clickedID: null,
  setClickedID: (clickID?) => set({ clickedID: clickID }),
  displayMenu: false,
  setDisplayMenu: (display) => set({ displayMenu: display }),
  itemView: true,
  setItemView: (view) => set({ itemView: view }),
}));
