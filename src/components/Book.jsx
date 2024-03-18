import React, { useState } from "react";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { NavLink } from "react-router-dom";

const Book = (props) => {
  const [addBookState, setAddBookState] = useState(false);

  const addBookToMyLibrary = async () => {
    const url = import.meta.env.VITE_MY_LIBRARY_URL;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: import.meta.env.VITE_AIRTABLE_BEARER,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          bookId: props.bookId,
          bookImg: props.img,
          bookTitle: props.title,
          bookAuthor: props.author,
        },
      }),
    });
  };

  const addBook = () => {
    setAddBookState(true);
    addBookToMyLibrary();
  };

  return (
    <div className="bg-colour-white rounded px-2 py-3  hover:scale-110 ease-in duration-200">
      <div className="flex justify-center">
        <NavLink to={`/bookdetail/${props.bookId}`}>
          <img
            className="shadow-md shadow-colour-shadow h-48 w-36 mb-1 text-sm"
            src={props.img}
            alt={props.title}
          ></img>
        </NavLink>
      </div>
      <div className="flex justify-between items-start">
        <p className="text-base font-semibold line-clamp-3 mx-1.5">
          {props.title}
        </p>
        {addBookState ? (
          <LocalLibraryIcon></LocalLibraryIcon>
        ) : (
          <button type="button" onClick={addBook}>
            <LocalLibraryOutlinedIcon></LocalLibraryOutlinedIcon>
          </button>
        )}
      </div>

      <p className="text-sm line-clamp-3 mx-1.5">{props.author}</p>
    </div>
  );
};

export default Book;
