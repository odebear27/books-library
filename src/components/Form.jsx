import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import CategoryButton from "./CategoryButton";

const Form = ({ setBooks, setNoResults, noResults }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryPassValidation, setSearchQueryPassValidation] =
    useState(true);

  const categories = [
    "romance",
    "computer",
    "business",
    "horror",
    "mystery",
    "finance",
  ];

  const getBooksByKeyword = async (searchType) => {
    try {
      // const controller = new AbortController();
      console.log("length", searchQuery.length);
      if (searchType.length > 0) {
        const res = await fetch(
          import.meta.env.VITE_URL +
            "?q=" +
            searchType +
            "&maxResults=20" +
            "&key=" +
            import.meta.env.VITE_KEY
          // { signal: controller.signal }
        );

        if (res.ok) {
          const data = await res.json();
          // const data = { kind: "books#volumes", totalItems: 0 };
          console.log(data);
          if (data.totalItems === 0) {
            setNoResults(true);
          }
          setBooks(data.items);
        }
      } else {
        setSearchQueryPassValidation(false);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  //   useEffect(() => {
  //     const controller = new AbortController();
  //     getBooksByKeyword(controller.signal);

  //     return () => {
  //       controller.abort();
  //     };
  //   }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (query) => {
    setNoResults(false);
    setSearchQueryPassValidation(true);
    setBooks([]);
    getBooksByKeyword(query);
    setSearchQuery("");
  };

  const handleSearchCategory = (category) => {
    // event.preventDefault();
    setNoResults(false);
    setSearchQueryPassValidation(true);
    setBooks([]);
    console.log("category", category);
    // setSearchQuery(category);
    getBooksByKeyword(category);
  };

  return (
    <div>
      <SearchInput value={searchQuery} onChange={handleChange}></SearchInput>
      <SearchButton onClick={() => handleSearch(searchQuery)}></SearchButton>
      {categories.map((item, idx) => (
        <CategoryButton key={idx} onClick={() => handleSearchCategory(item)}>
          {item}
        </CategoryButton>
      ))}
      {/* {searchQuery} */}
      {/* {JSON.stringify(noResults)} */}

      {!searchQueryPassValidation ? (
        <div>please enter something to search</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
