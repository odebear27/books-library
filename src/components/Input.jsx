import React from "react";

const Input = (props) => {
  return (
    <textarea
      className="border border-black rounded pl-0.5 h-24 w-96 mx-0.5 text-colour-slate outline-colour-slate"
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    ></textarea>
  );
};

export default Input;
