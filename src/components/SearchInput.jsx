import React from "react";

const SearchInput = (props) => {
  return (
    <>
      <input
        className="h-12 border border-black rounded pl-2 w-96 mr-1.5"
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search for a book..."
      ></input>
    </>
  );
};

export default SearchInput;
