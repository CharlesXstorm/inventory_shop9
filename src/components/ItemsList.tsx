import { itemsHeaderProps, itemsbodyProps, itemslistProps } from "@/types";
import React from "react";
import { settingBar, Svg } from "./svgs";

const ItemsHeader: React.FC<itemsHeaderProps> = ({ index, item }) => {
  return <span className="font-[500]">{item}</span>;
};

const ItemsBodyContent: React.FC<itemsbodyProps> = ({ index, item, part }) => {
  if (!item) {
    return null;
  } else {
    return <span>{part[item]}</span>;
  }
};

const ItemsBody: React.FC<itemsbodyProps> = ({
  index,
  part,
  customise,
  itemsheader,
}) => {
  return (
    <div className="items__list__body__content">
      {customise && (
        <span className="items__checkbox">
          <input type="checkbox" />
        </span>
      )}
      <div className="items__list__content">
        {itemsheader?.map((item, index) => (
          <ItemsBodyContent key={index} index={index} item={item} part={part} />
        ))}
      </div>
    </div>
  );
};

const ItemsList: React.FC<itemslistProps> = ({
  customise = false,
  itemsheader,
  itemsbody,
  err,
}) => {
  return (
    <div className="items__list">
      <div className="items__list__header">
        {customise && (
          <span className="items__checkbox">
            <button className="tooltip" data-title="customise" type="button">
              <Svg svg={settingBar} width="1em" />
            </button>
            <input type="checkbox" />
          </span>
        )}
        <div className="items__list__content">
          {itemsheader.map((item, index) => (
            <ItemsHeader key={index} index={index} item={item} />
          ))}
        </div>
      </div>

      {itemsbody.length < 1 && (
        <div className="items__list__body_err">
          {<div>{err}</div>}
        </div>
      )}

      {itemsbody.length > 0 && (
        <div className="items__list__body">
          {itemsbody.map((item, index) => (
            <ItemsBody
              key={index}
              index={index}
              part={item}
              customise={customise}
              itemsheader={itemsheader}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ItemsList;
