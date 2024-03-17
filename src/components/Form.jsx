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
            "&maxResults=24" +
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

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log("Enter key was pressed");
      handleSearch(searchQuery);
    }
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
    <div className="items-center">
      <div className="flex justify-center h-[calc(100vh-14rem)] items-center">
        <div className="flex flex-wrap bg-colour-white opacity-75 w-3/6 rounded">
          <div className="container flex justify-center my-4">
            <div className="flex flex-col">
              <SearchInput
                value={searchQuery}
                onChange={handleChange}
                onKeyDown={(event) => handleKeyDown(event)}
              ></SearchInput>
              {!searchQueryPassValidation ? (
                <div className="text-xs text-colour-red font-medium">
                  please enter something to search
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex-shrink-0 my-2">
              <SearchButton
                onClick={() => handleSearch(searchQuery)}
              ></SearchButton>
            </div>
          </div>

          <div className="container flex justify-center">
            <div className="grid-rows-2">
              <p className=" flex justify-center font-medium my-4 italic">
                or search for a book by category below...
              </p>
              <div className="flex justify-center flex-wrap font-medium">
                {categories.map((item, idx) => (
                  <CategoryButton
                    key={idx}
                    onClick={() => handleSearchCategory(item)}
                  >
                    {item}
                  </CategoryButton>
                ))}
              </div>
            </div>
          </div>

          {/* {searchQuery} */}
          {/* {JSON.stringify(noResults)} */}

          {/* {!searchQueryPassValidation ? (
        <div>please enter something to search</div>
      ) : (
        ""
      )} */}
        </div>
      </div>
    </div>
  );
};

export default Form;
