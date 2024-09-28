import React from "react";
import { search, Svg } from "../svgs";
import Input from "./Input";

interface searchProps {
  className?: string;
  width?: string;
}

const Search = ({ className, width }: searchProps) => {
  return (
    <div
      className={[`${width} ${className}`, "search"].filter(Boolean).join(" ")}
    >
      <button type="button">
        <Svg svg={search} color="orange" />
      </button>
      <span className="w-[2px] p-[1px] h-[20px] bg-white rounded"></span>
      <Input type="text" placeholder="search" />
    </div>
  );
};

export default Search;
