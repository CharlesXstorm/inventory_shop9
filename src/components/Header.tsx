import React from "react";
import Search from "./ui/Search";
import Gutter from "./ui/Gutter";
import Brand from "./ui/Brand";
import { account, addBox, arrowLine, notification, Svg } from "./svgs";

const Header = () => {
  return (
    <nav className="header">
      <div className="header__left">
        <div className="header__brand">
          <Brand />
        </div>
        <Search />
      </div>

      <div className="header__right">
        <button className="flex gap-1 items-center">
          LOS-1
          <span>
            <Svg svg={arrowLine} color={"orange"} width={"1em"} />
          </span>
        </button>
        <span>|</span>
        <button type="button">
          <Svg svg={addBox} color={"orange"} width={"2em"} />{" "}
        </button>
        <button type="button">
          <Svg svg={notification} color={"#ffffff"} width={"2em"} />{" "}
        </button>
        <button type="button">
          <Svg svg={account} color={"orange"} width={"2em"} />{" "}
        </button>
      </div>
      {/* <div className='header__brand'>
        <Brand />
      </div>
      <Search />
      <div></div> */}
    </nav>
  );
};

export default Header;
