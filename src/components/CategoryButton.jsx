import React from "react";

const CategoryButton = (props) => {
  return (
    <button
      onClick={() => {
        console.log("clickedddd");
      }}
    >
      {props.children}
    </button>
  );
};

export default CategoryButton;
