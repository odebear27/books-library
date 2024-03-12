import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import CategoryButton from "./CategoryButton";

const Form = ({ setBooks }) => {
  const [searchQuery, setSearchQuery] = useState();

  const categories = [
    "romance",
    "computer",
    "business",
    "horror",
    "mystery",
    "finance",
  ];

  const getBooksByKeyword = async (signal) => {
    // console.log(
    //   import.meta.env.VITE_URL +
    //     searchQuery +
    //     "&key=" +
    //     import.meta.env.VITE_KEY
    // );

    try {
      const res = await fetch(
        import.meta.env.VITE_URL +
          searchQuery +
          "&key=" +
          import.meta.env.VITE_KEY,
        {
          signal,
        }
      );

      if (res.ok) {
        const data = await res.json();
        setBooks(data);
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

  const handleSearch = (event) => {
    event.preventDefault();
    getBooksByKeyword();
  };

  return (
    <div>
      <SearchInput onChange={handleChange}></SearchInput>
      <SearchButton onClick={handleSearch}></SearchButton>
      {categories.map((item, idx) => (
        <CategoryButton key={idx}>{item}</CategoryButton>
      ))}
      {searchQuery}
    </div>
  );
};

export default Form;
