import React from "react";
import css from "./Slider.module.css"

const Item = ({
  h1 = "",
  img = "",
  subHeaderTitle = "",
  description = "",
}) => {
  const itemStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className={css.item} style={itemStyle}>
      {subHeaderTitle && <p className={css.subHeader}>{subHeaderTitle}</p>}
      {h1.length && <h1 className={css.title}>{h1}</h1>}
      {description && <div className={css.description}>{description}</div>}
    </div>
  );
};

export default Item;
