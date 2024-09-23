import { create } from "zustand";

interface storeProps {
  isHovered: boolean;
  //   isClicked: boolean;
  hoveredID: string | null;
  clickedID: string | null;
  setHovered: (hover: boolean, hoverID?: string | null) => void;
  setClickedID: (clickID?: string | null) => void;
}

export const useStore = create<storeProps>((set) => ({
  isHovered: false,
  //   isClicked: false,
  hoveredID: null,
  clickedID: null,
  setHovered: (hover, hoverID?) =>
    set({ isHovered: hover, hoveredID: hoverID }),
  setClickedID: (clickID?) => set({ clickedID: clickID }),
}));
