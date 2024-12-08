import { inputProps } from "@/types";
import React from "react";
import { arrowLine, Svg } from "../svgs";
import Search from "./Search";

interface dropdownProps {
  option?: string;
  options?: Array<string>;
}

const DropdownItems: React.FC<dropdownProps> = ({ option }) => {
  return (
    <button className="dropdown__button w-full flex justify-between items-center rounded-[4px] p-1 bg-white hover:bg-orange-400">
      {option}
    </button>
  );
};

const Dropdown: React.FC<dropdownProps> = ({ options }) => {
  return (
    <div className="dropdown w-full relative">
      <button className="dropdown__button w-full flex justify-between items-center border-[1px] rounded-[4px] p-1 bg-white">
        title
        <span>
          <Svg svg={arrowLine} width="1.5em" />
        </span>
      </button>
      <div className="dropdown__info flex flex-col absolute top-[110%] p-1 w-full border-[2px] h-[10em] bg-white rounded-[4px]">
        <input type="text" placeholder="Search" className="border border-orange-400 mb-1 rounded-[4px] p-1 w-full " />
        {options.map((option, index) => (
            <DropdownItems key={index} option={option} />
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
