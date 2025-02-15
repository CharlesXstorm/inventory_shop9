import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { arrowLine, Svg } from "../svgs";
import Search from "./Search";
import { inputProps } from "@/types";

interface dropdownitemsProps {
  option: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  onChange: (name: string, option: string) => void;
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

interface dropdownProps {
  id: string;
  options: Array<string>;
  name: string;
  onChange: (name: string, option: string) => void;
}

const DropdownItems: React.FC<dropdownitemsProps> = ({
  option,
  setTitle,
  name,
  onChange,
  setDropdown,
  setSearch,
}) => {
  const setOption = () => {
    setTitle(option);
    onChange(name, option);
    setDropdown(false);
    setSearch("");
  };
  return (
    <button
      type="button"
      onClick={setOption}
      className="dropdown__button w-full flex justify-between items-center rounded-[4px] p-1 px-4 bg-white hover:bg-orange-400"
    >
      {option}
    </button>
  );
};

const Dropdown: React.FC<dropdownProps> = ({ id, options, name, onChange }) => {
  const [title, setTitle] = useState(options[0]);
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [clicked, setClicked] = useState(false);

  const btnRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clickHandler = () => {
    setDropdown((prev) => {
      if (!prev && !clicked) {
        console.log("previous state is blurred not clicked");
        setClicked(true);
        return true;
      } else if (!prev && clicked) {
        console.log("blurred clicked");
        setClicked(false);
        return false;
      } else {
        return false;
      }
    });
  };

  let filteredOptions =
    search.length === 0
      ? [...options]
      : options.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        );

  useEffect(() => {
    setTitle(options[0]);
  }, [options]);

  // useEffect(() => {
  //   if (dropdown) {
  //     searchRef?.current?.focus();
  //   } else {
  //     setClicked(false);
  //   }
  // }, [dropdown]);

  return (
    <div
      id={id}
      className="dropdown border-[2px] border-blue-600 w-full relative"
    >
      <button
        ref={btnRef}
        onClick={clickHandler}
        type="button"
        className="dropdown__button w-full flex justify-between items-center border-[1px] rounded-[4px] p-1 bg-white"
      >
        {title}
        <span
          className={[dropdown && "rotate-180", !dropdown && "rotate-0"]
            .filter(Boolean)
            .join(" ")}
        >
          <Svg svg={arrowLine} width="1.5em" />
        </span>
      </button>

      {
        <div
          className={[
            `${!dropdown && "hidden"}`,
            `${dropdown && "flex"}`,
            "dropdown__info",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="p-1 flex w-full h-auto">
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={searchHandler}
              onFocus={() => setDropdown(true)}
              onBlur={() => setDropdown(false)}
              placeholder="Search"
              className="border border-orange-400 rounded-[4px] p-1 w-full "
            />
          </div>
          <div className="flex flex-col w-full flex-grow overflow-auto p-1">
            {filteredOptions.map((option, index) => (
              <DropdownItems
                key={index}
                option={option}
                setTitle={setTitle}
                name={name}
                onChange={onChange}
                setDropdown={setDropdown}
                setSearch={setSearch}
              />
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Dropdown;
