import React from "react";

const SearchInput = (props) => {
  return (
    <>
      <input
        className="bg-colour-bluishGrey placeholder-colour-slate placeholder-opacity-1 placeholder:font-medium placeholder:italic h-12 border outline-colour-slate outline-1 rounded pl-2 w-96 mr-1.5"
        type="text"
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        placeholder="Search for a book by keyword, title or author..."
      ></input>
    </>
  );
};

export default SearchInput;
