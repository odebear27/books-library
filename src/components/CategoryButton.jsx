import React from "react";

const CategoryButton = (props) => {
  return (
    <button
      className="hover:scale-110 ease-in duration-200 bg-colour-bluishGrey px-2.5 rounded mb-5 mx-2"
      onClick={props.onClick}
      type="button"
    >
      {props.children}
    </button>
  );
};

export default CategoryButton;
