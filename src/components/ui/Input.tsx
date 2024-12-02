"use client";

import { inputProps } from "@/types";
import React from "react";
import { image, Svg } from "../svgs";
import { uiscript } from "@/script";

const Input: React.FC<inputProps> = ({
  className,
  id,
  type,
  name,
  value,
  accept,
  placeholder,
  disabled,
  maxFile = 5,
  maxSize = 300,
  maxWidth = 1500,
  maxHeight = 1500,
}) => {
  if (type === "file") {
    if (maxSize.toString().length > 6) {
      return (
        <div className="text-red-600 flex p-6 items-center justify-center uploadbox">
          MaxSize must not exceed 900mb. Please set a value lower than {maxSize}
        </div>
      );
    } else {
      return (
        <div
          onClick={uiscript.click}
          onDragOver={(e) => {
            e.preventDefault();
            uiscript.dragover();
          }}
          onDragLeave={uiscript.dragleave}
          onDrop={async (e) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            const res = await uiscript.drop(
              files,
              maxFile,
              maxSize,
              maxWidth,
              maxHeight
            );
            console.log(res);
          }}
          id="uploadbox"
          className="uploadbox"
        >
          <div className="w-full flex justify-center pt-4">
            <Svg svg={image} width="3em" color="#666" />
          </div>
          <p className=" px-5 py-2 flex flex-wrap text-center text-[16px]">
            Drag image(s) here or{" "}
            <span className="w-full text-blue-600">browse images</span>
            <span className="text-[12px]">
              You can add up to {maxFile} images, each not exceeding{" "}
              {maxSize.toString().length > 3
                ? maxSize.toString().length > 4
                  ? maxSize.toString().length > 5
                    ? `${maxSize.toString().slice(0, 3)}mb`
                    : `${maxSize.toString().slice(0, 2)}mb`
                  : `${maxSize.toString()[0]}mb`
                : `${maxSize}kb`}{" "}
              in size and {maxWidth} X {maxHeight} in resolution.
            </span>
          </p>
          <input
            id="uploadfile"
            onChange={async (e) => {
              const files = e.target.files;
              const res = await uiscript.drop(
                files,
                maxFile,
                maxSize,
                maxWidth,
                maxHeight
              );
              console.log(res);
              // console.log("image uploaded", e.target.files)
            }}
            className="hidden"
            type={type}
            accept={accept}
          />
        </div>
      );
    }
  } else {
    return (
      <>
        <input
          id={id}
          className={[`${className}`, "input"].filter(Boolean).join(" ")}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => console.log("focusing on input")}
        />
      </>
    );
  }
};

export default Input;
