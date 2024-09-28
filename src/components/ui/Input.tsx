"use client"

import { inputProps } from "@/types";
import React from "react";

const Input: React.FC<inputProps> = ({
  className,
  type,
  name,
  value,
  placeholder,
  disabled,
}) => {
  return (
    <>
      <input
        className={[`${className}`, "input"].filter(Boolean).join(" ")}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={()=> console.log("focusing on input")}
      />
    </>
  );
};

export default Input;
