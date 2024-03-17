import React from "react";

const CategoryButton = (props) => {
  return (
    <button
      className="hover:text-colour-red mb-5 mx-2"
      onClick={props.onClick}
      type="button"
    >
      {props.children}
    </button>
  );
};

export default CategoryButton;
