"use client";

import { inputProps } from "@/types";
import React, { useState } from "react";
import { image, Svg } from "../svgs";
import { uiscript } from "@/script";

const Input: React.FC<inputProps> = ({
  className,
  id,
  type,
  rows,
  cols,
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
  const [info, setInfo] = useState<any[]>([]);
  const [error, setError] = useState("");

  ///////////////processFile/////////////////
  const processFile = async (files: FileList) => {
    const res = (await uiscript.drop(
      files,
      maxFile,
      maxSize,
      maxWidth,
      maxHeight
    )) as any;
    if (res) {
      if (typeof res === "string") {
        setError(res);
      } else {
        error.length > 0 ? setError("") : null;
        if (info.length > maxFile - 1) {
          setError(`Error: number of uploads must not exceed ${maxFile}`);
          setInfo([]);
        } else {
          setInfo((prev) => [...prev, ...res]);
        }
      }
    }
  };
  //////////////////////////////////////////////

  if (type === "file") {
    if (maxSize.toString().length > 6) {
      return (
        <div className="text-red-600 flex p-6 items-center justify-center uploadbox">
          MaxSize must not exceed 900mb. Please set a value lower than {maxSize}
        </div>
      );
    } else {
      return (
        <div className="uploadcontainer">
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
              processFile(files);
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
              onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                const files = e.target.files;
                if (files) {
                  processFile(files);
                }
              }}
              className="hidden"
              name={name}
              type={type}
              accept={accept}
            />
          </div>

          <div
            className={[
              "uploadinfo",
              error.length > 0 ? "text-red-600 flex" : "grid grid-cols-3 gap-2",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {error.length > 0 && <p>{error}</p>}
            {info.length > 0 &&
              !(error.length > 0) &&
              info.map((item, index) => (
                <span key={index} className="bg-zinc-200 p-1 text-[8px]">
                  {item.name.length > 10
                    ? `${item.name.slice(0, 10)}..`
                    : item.name}
                </span>
              ))}
          </div>
        </div>
      );
    }
  } else if (type === "textarea") {
    return <textarea className="w-full border rounded-[8px] p-2" id={id} rows={rows} cols={cols} name={name} placeholder={placeholder}></textarea>;
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
