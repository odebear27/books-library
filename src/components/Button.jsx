import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-colour-grey text-colour-white py-px px-3 rounded-md w-20"
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
