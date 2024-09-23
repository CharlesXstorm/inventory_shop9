"use client";

import { menuProps } from "@/types";
import React, { useEffect, useState } from "react";
import Gutter from "./ui/Gutter";
import Button from "./ui/Button";
import Span from "./ui/Span";
import Collapsible, { Collapsible_menu } from "./ui/Collapsible";
import { useStore } from "@/store";
import { Svg } from "./svgs";

const Menu: React.FC<menuProps> = ({ id, title, items, icon, collapse }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { setClickedID, clickedID } = useStore();

  useEffect(() => {
    clickedID !== id ? setIsClicked(false) : null;
  }, [clickedID]);
  return (
    <Gutter type="column" button>
      <Button
        id={id}
        collapsible={collapse}
        isClicked={isClicked}
        isHovered={isHovered}
        onClick={() => {
          setIsClicked((prev) => !prev);
          setClickedID(id);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        primary
      >
        <Span>
          <Svg svg={icon} isClicked={isClicked} isHovered={isHovered} />
          {title}
        </Span>
      </Button>
      {collapse && (
        <Collapsible id={id} isClicked={isClicked}>
          {items?.map((item) => (
            <Collapsible_menu
              key={item.id}
              id={item.id}
              className="collapsible__menu"
            >
              {item.title}
            </Collapsible_menu>
          ))}
        </Collapsible>
      )}
    </Gutter>
  );
};

export default Menu;
