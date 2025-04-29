import { signin, Svg } from "@/components/svgs";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="signin">
      <div className="signinBg">
        <span className="flex w-full">
          <Svg svg={signin} width="25vw" />
          <Svg svg={signin} width="25vw" />
          <Svg svg={signin} width="25vw" />
          <Svg svg={signin} width="25vw" />
        </span>
        <span className="flex w-full">
          <Svg svg={signin} width="25vw" />
          <Svg svg={signin} width="25vw" />
          <Svg svg={signin} width="25vw" />
          <Svg svg={signin} width="25vw" />
        </span>
      </div>
      <div className="signin__container">
        <div className="signin__col bg-white lg:w-[60%]">
          <div className="signin__col__item">
            <Image
              src="/icons/S9.svg"
              alt="logo"
              width={48}
              height={48}
              className="object-contain w-[20%]"
            />
          </div>
          <p className="signin__col__item">
            <span className="text-2xl">Sign in</span>
            <span>to access inventory</span>
          </p>
        </div>
        <div className="signin__col bg-[#27272A] lg:w-[40%]"></div>
      </div>
    </div>
  );
};

export default page;
