"use client";

import React, { useState } from "react";
import Input from "./ui/Input";
import { question, Svg } from "./svgs";
import Clientscript from "./clientscript/Clientscript";
import Dropdown from "./ui/Dropdown";
import { categories, subcategories } from "@/data";

const NewItem = () => {

  const [data, setData] = useState<{ [key: string]: any }>({"category":"Accessories"});

  let dynamicCategories = subcategories[data["category"]]

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
              <label htmlFor="category" className="text-red-600">Category*</label>
              <Dropdown
                id="category"
                name="category"
                onChange={selectHandler}
                options={categories}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="subcategory" className="text-red-600">Sub Category*</label>
              <Dropdown
                id="subcategory"
                name="subcategory"
                onChange={selectHandler}
                options={dynamicCategories??[]}
              />
            </div>
            <div className="newitem__content__form__input flex">
              <label htmlFor="part_name" className="text-red-600">
                Name*
              </label>
              <Input
                id="part_name"
                name="part_name"
                type="text"
                placeholder="select part name"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input flex">
              <label htmlFor="brand">Brand(s)</label>
              <Input
                id="brand"
                name="brand"
                type="text"
                placeholder="car brand"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="model">Model(s)</label>
              <Input
                id="model"
                name="model"
                type="text"
                placeholder="car model"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="year">Year</label>
              <Input
                id="year"
                name="year"
                type="text"
                placeholder="select year"
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="flex w-[50%]">
            <Input
              type="file"
              name="images"
              accept="image/png, image/jpg, image/jpeg"
              maxSize={300}
            />
          </div>
        </div>
        {
          ///////////////////////////////////////////////////////////
        }
        <div className="newitem__content px-[1em] py-[1.5em] lg:py-[2em] flex flex-col md:flex-row md:justify-between gap-4 lg:gap-6">
          <div className="newitem__content__form grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="newitem__content__form__input">
              <label htmlFor="manufacturer">Manufacturer</label>
              <Input
                id="manufacturer"
                name="manufacturer"
                type="text"
                placeholder="Select or Add Manufacturer"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="dimension">Dimension</label>
              <Input
                id="dimension"
                name="dimension"
                type="text"
                placeholder="dimension"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="weight">Weight</label>
              <Input
                id="weight"
                name="weight"
                type="text"
                placeholder="weight"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="capacity">Capacity</label>
              <Input
                id="capacity"
                name="capacity"
                type="text"
                placeholder="capacity"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="size">Size</label>
              <Input
                id="size"
                name="size"
                type="text"
                placeholder="size"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="volume">Volume</label>
              <Input
                id="volume"
                name="volume"
                type="text"
                placeholder="volume"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="sku">
                SKU
                <span className="tooltip" data-title="Stock keeping unit">
                  <Svg svg={question} width="1.5em" />
                </span>
              </label>
              <Input
                id="sku"
                name="sku"
                type="text"
                placeholder="sku"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="mpn">
                MPN
                <span className="tooltip" data-title="Manufacturer Part Number">
                  <Svg svg={question} width="1.5em" />
                </span>
              </label>
              <Input
                id="mpn"
                name="mpn"
                type="text"
                placeholder="mpn"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="ean">
                EAN
                <span
                  className="tooltip"
                  data-title="European Article Number \n used for barcode scan"
                >
                  <Svg svg={question} width="1.5em" />
                </span>
              </label>
              <Input
                id="ean"
                name="ean"
                type="text"
                placeholder="ean"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="enn">
                ENN
                <span className="tooltip" data-title="Engine Number">
                  <Svg svg={question} width="1.5em" />
                </span>
              </label>
              <Input
                id="enn"
                name="enn"
                type="text"
                placeholder="enn"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        {
          //////////sales and purchase info/////////////////////////////////////////////////////////////
        }

        <hr />

        <div className="newitem__content px-[1em] py-[1.5em] lg:py-[2em] flex flex-col md:flex-row md:justify-between gap-4 lg:gap-6">
          <div className="newitem__content__form flex flex-col gap-6 md:w-[50%]">
            <p className="form__title">Selling Information</p>
            <div className="newitem__content__form__input">
              <label
                htmlFor="selling"
                data-title="The rate at which you're going \n to sell this item"
                className="text-red-600 underline decoration-dotted tooltip"
              >
                Selling Price*
              </label>
              <Input
                id="selling"
                name="selling"
                type="text"
                placeholder="Enter Selling Price"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input flex">
              <label htmlFor="sales_description" className="self-start">
                Description
              </label>
              <Input
                id="sales_description"
                name="sales_description"
                type="textarea"
                rows={3}
                placeholder="Sales Description"
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="newitem__content__form flex flex-col gap-6 md:w-[50%]">
            <p className="form__title">Purchase Information</p>
            <div className="newitem__content__form__input">
              <label
                htmlFor="purchase"
                className="text-red-600 underline decoration-dotted tooltip"
                data-title="The rate at which you bought \n this item"
              >
                Cost Price*
              </label>
              <Input
                id="purchase"
                name="purchase"
                type="text"
                onChange={changeHandler}
              />
            </div>
            <div className="newitem__content__form__input">
              <label htmlFor="purchase_description" className="self-start">
                Description
              </label>
              <Input
                id="purchase_description"
                name="purchase_description"
                type="textarea"
                rows={3}
                placeholder="Purchase Description"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        {
          //////track inventory//////////////////////////////////////////////////////
        }

        <hr />

        <div className="newitem__content px-[1em] py-[1.5em] lg:py-[2em] flex flex-col md:flex-row md:justify-between gap-4 lg:gap-6">
          <div className="newitem__content__form flex flex-col gap-6 md:w-[50%]">
            <p className="form__title">Track Inventory</p>
            <div className="newitem__content__form__input">
              <label
                htmlFor="openstock"
                data-title="The stock available for sale at \n the beginning of the accounting period"
                className="underline decoration-dotted tooltip"
              >
                Opening Stock
              </label>
              <Input
                id="openstock"
                name="openstock"
                type="text"
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="newitem__content__form flex flex-col md:self-end gap-6 md:w-[50%]">
            <div className="newitem__content__form__input">
              <label
                htmlFor="reorder"
                className="underline decoration-dotted tooltip"
                data-title="When the stock reaches the reorder point, \n a notification will be sent to you"
              >
                Reorder Point
              </label>
              <Input
                id="reorder"
                name="reorder"
                type="text"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>

        <hr />

        <div className="form__buttons w-full px-[1em] py-[2em]">
          <input
            type="submit"
            name="save"
            value="save"
            className="button cursor-pointer bg-orange-500 font-[600] lg:text-[14px]"
          />
        </div>
      </form>

      <Clientscript />
    </div>
  );
};

export default NewItem;
