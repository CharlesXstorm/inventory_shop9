import React from "react";
import Input from "./ui/Input";

const NewItem = () => {
  return (
    <div className="newitem flex flex-col gap-4 p-[1em]">
      <div className="newitem__content flex flex-col md:flex-row md:justify-between gap-4 lg:gap-6">
        
        <div className="newitem__content__form flex flex-col gap-6 md:w-[50%]">
          <div className="newitem__content__form__input flex items-center lg:flex-row gap-6">
            <label htmlFor="category" className="w-[25%] text-red-600">Category*</label>
            <Input id="category" name="category" type="text" placeholder="select category" />
          </div>
          <div className="newitem__content__form__input flex items-center lg:flex-row gap-6">
            <label htmlFor="part_name" className="w-[25%] text-red-600">Name*</label>
            <Input id="part_name" name="part name" type="text" placeholder="select part name" />
          </div>
          <div className="newitem__content__form__input flex items-center lg:flex-row gap-6">
            <label htmlFor="brand" className="w-[25%]">Brand(s)</label>
            <Input id="brand" name="brand" type="text" placeholder="car brand" />
          </div>
          <div className="newitem__content__form__input flex items-center lg:flex-row gap-6">
            <label htmlFor="model" className="w-[25%]">Model(s)</label>
            <Input id="model" name="model" type="text" placeholder="car model" />
          </div>
          <div className="newitem__content__form__input flex items-center lg:flex-row gap-6">
            <label htmlFor="year" className="w-[25%]">Year</label>
            <Input id="year" name="year" type="text" placeholder="select year" />
          </div>
        </div>

        <div className="flex w-[50%]">
            <Input type="file" accept="image/png, image/jpg, image/jpeg" maxSize={300} />
        </div>
      </div>

      <div className="newitem__content__form flex flex-col gap-6 md:w-[50%]"></div>
    </div>
  );
};

export default NewItem;
