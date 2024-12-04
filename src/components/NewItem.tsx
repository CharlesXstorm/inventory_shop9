"use client"

import React, { useEffect } from "react";
import Input from "./ui/Input";
import { question, Svg } from "./svgs";
import Clientscript from "./clientscript/Clientscript";

const NewItem = () => {
  return (
    <div className="newitem text-[14px] flex flex-col overflow-scroll">
      <div className="newitem__content bg-zinc-100 px-[1em] py-[1.5em] lg:py-[2em] flex flex-col md:flex-row md:justify-between gap-4 lg:gap-6">
        <div className="newitem__content__form flex flex-col gap-6 md:w-[50%]">
          <div className="newitem__content__form__input flex items-center lg:flex-row gap-6">
            <label htmlFor="category" className="w-[25%] text-red-600">
              Category*
            </label>
            <Input
              id="category"
              name="category"
              type="text"
              placeholder="select category"
            />
          </div>
          <div className="newitem__content__form__input flex items-center lg:flex-row gap-6">
            <label htmlFor="part_name" className="w-[25%] text-red-600">
              Name*
            </label>
            <Input
              id="part_name"
              name="part name"
              type="text"
              placeholder="select part name"
            />
          </div>
          <div className="newitem__content__form__input flex items-center lg:flex-row gap-6">
            <label htmlFor="brand" className="w-[25%]">
              Brand(s)
            </label>
            <Input
              id="brand"
              name="brand"
              type="text"
              placeholder="car brand"
            />
          </div>
          <div className="newitem__content__form__input flex items-center lg:flex-row gap-6">
            <label htmlFor="model" className="w-[25%]">
              Model(s)
            </label>
            <Input
              id="model"
              name="model"
              type="text"
              placeholder="car model"
            />
          </div>
          <div className="newitem__content__form__input flex items-center lg:flex-row gap-6">
            <label htmlFor="year" className="w-[25%]">
              Year
            </label>
            <Input
              id="year"
              name="year"
              type="text"
              placeholder="select year"
            />
          </div>
        </div>

        <div className="flex w-[50%]">
          <Input
            type="file"
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
            />
          </div>
          <div className="newitem__content__form__input">
            <label htmlFor="dimension">Dimension</label>
            <Input
              id="dimension"
              name="dimension"
              type="text"
              placeholder="dimension"
            />
          </div>
          <div className="newitem__content__form__input">
            <label htmlFor="weight">Weight</label>
            <Input id="weight" name="weight" type="text" placeholder="weight" />
          </div>
          <div className="newitem__content__form__input">
            <label htmlFor="capacity">Capacity</label>
            <Input
              id="capacity"
              name="capacity"
              type="text"
              placeholder="capacity"
            />
          </div>
          <div className="newitem__content__form__input">
            <label htmlFor="size">Size</label>
            <Input id="size" name="size" type="text" placeholder="size" />
          </div>
          <div className="newitem__content__form__input">
            <label htmlFor="volume">Volume</label>
            <Input id="volume" name="volume" type="text" placeholder="volume" />
          </div>
          <div className="newitem__content__form__input">
            <label htmlFor="sku">
              SKU
              <span className="tooltip" data-title="Stock keeping unit">
                <Svg svg={question} width="1.5em" />
              </span>
            </label>
            <Input id="sku" name="sku" type="text" placeholder="sku" />
          </div>
          <div className="newitem__content__form__input">
            <label htmlFor="mpn">
              MPN
              <span className="tooltip" data-title="Manufacturer Part Number">
                <Svg svg={question} width="1.5em" />
              </span>
            </label>
            <Input id="mpn" name="mpn" type="text" placeholder="mpn" />
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
            <Input id="ean" name="ean" type="text" placeholder="ean" />
          </div>
          <div className="newitem__content__form__input">
            <label htmlFor="enn">
              ENN
              <span className="tooltip" data-title="Engine Number">
                <Svg svg={question} width="1.5em" />
              </span>
            </label>
            <Input id="enn" name="enn" type="text" placeholder="enn" />
          </div>
        </div>
      </div>

      <Clientscript />
    </div>
  );
};

export default NewItem;
