import React from "react";

const CategoryButton = (props) => {
  return (
    <button onClick={props.onClick} type="button">
      {props.children}
    </button>
  );
};

export default CategoryButton;
