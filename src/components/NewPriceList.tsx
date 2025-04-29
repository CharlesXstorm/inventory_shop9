"use client";

import React, { useState } from "react";
import Input from "./ui/Input";
import { question, Svg } from "./svgs";
import Clientscript from "./clientscript/Clientscript";
import Dropdown from "./ui/Dropdown";
import { currencies, subcategories } from "@/constants";

const NewPriceList = () => {
  const [data, setData] = useState<{ [key: string]: any }>({
    currency: "AED- UAE Dirham",
  });

//   let dynamicCategories = subcategories[data["category"]];

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const selectHandler = (title: string, option: string) => {
    setData((prev) => {
      return { ...prev, [title]: option };
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("data", data);
    const formData = new FormData();

    Object.keys(data).forEach((item) => {
      formData.append(item, data[item]);
    });

    console.log("submitted", formData.get("category"));
  };

  return (
    <div className="newitem overflow-scroll">
      <form onSubmit={submitHandler} className="text-[14px] flex flex-col">
        
        <div className="newitem__content bg-zinc-100 px-[1em] py-[1.5em] lg:py-[2em] flex flex-col md:flex-row md:justify-between gap-4 lg:gap-6">
          <div className="newitem__content__form flex flex-col gap-6 md:w-[50%]">
            <div className="newitem__content__form__input">
              <label htmlFor="pricelist_name" className="text-red-600">
                Name*
              </label>
              <Input
                id="pricelist_name"
                name="pricelist_name"
                type="text"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input flex">
              <label htmlFor="pricelist_description" className="self-start">
                Description
              </label>
              <Input
                id="pricelist_description"
                name="pricelist_description"
                type="textarea"
                rows={3}
                placeholder="Price List Description"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="currency">Currency</label>
              <Dropdown
                id="currency"
                name="currency"
                onChange={selectHandler}
                options={currencies}
              />
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};

export default NewPriceList;
