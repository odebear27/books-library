import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = (props) => {
  return (
    <button type="button" onClick={props.onClick}>
      <SearchIcon />
    </button>
  );
  //   <i class="bi bi-search-heart-fill"></i>;
};

export default SearchButton;
