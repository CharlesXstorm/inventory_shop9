import { itemsListHeaderField } from "@/constants";
import { autoparts } from "@/data";
import { autopartsProps, itemsHeaderProps } from "@/types";
import React from "react";
import { settingBar, Svg } from "./svgs";

const itemsObj = itemsListHeaderField.filter((item, index) => index < 5);
const itemsText = itemsObj.map((item,index)=> item.text)

const ItemsHeader: React.FC<itemsHeaderProps> = ({ index, item }) => {
  return <span className="font-[500]">{item}</span>;
};

const AutoPartItem : React.FC<autopartsProps> = ({ index, item, part }) => {
  if(!item){
    return null
  }else{
    return <span>{part[item]}</span>;
  }
};

const Autoparts: React.FC<autopartsProps> = ({ index, part }) => {
  return <div className="items__list__body__content">
  <span className="items__checkbox">
    <input type="checkbox" />
  </span>
  <div className="items__list__content">
  {Object.keys(part).filter((item)=> itemsText.includes(item)).map((item, index) => (
      <AutoPartItem key={index} index={index} item={item} part={part} />
    ))}
  </div>
</div>;
};

const ItemsList = () => {
  return (
    <div className="items__list">
      <div className="items__list__header">
        <span className="items__checkbox">
          <button className="tooltip" data-title="customise" type="button"><Svg svg={settingBar} width="1em" /></button>
          <input type="checkbox" />
        </span>
        <div className="items__list__content">
          {itemsText.map((item, index) => (
            <ItemsHeader key={index} index={index} item={item} />
          ))}
        </div>
      </div>

      <div className="items__list__body">
        {autoparts.map((item, index) => (
            <Autoparts key={index} index={index} part={item} />
          ))}
      </div>

    </div>
  );
};

export default ItemsList;
