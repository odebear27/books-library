import React from "react";

const SearchInput = (props) => {
  return (
    <>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search for a book..."
      ></input>
    </>
  );
};

export default SearchInput;
