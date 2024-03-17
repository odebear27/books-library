import React, { useState } from "react";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { NavLink } from "react-router-dom";

const Book = (props) => {
  const [addBookState, setAddBookState] = useState(false);
  // const [allBookIds, setAllBookIds] = useState([]);
  // const [recordId, setRecordId] = useState(null);

  // let allBookIds = [];
  // let recordId;

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

    if (res.ok) {
      // getBooksFromMyLibrary();
    } else {
      console.log("an error occurred");
    }
  };

  // const getAllBookIdFromMyLibrary = async () => {
  //   const url = import.meta.env.VITE_MY_LIBRARY_URL;
  //   const res = await fetch(url + "?fields%5B%5D=bookId", {
  //     headers: {
  //       Authorization: import.meta.env.VITE_AIRTABLE_BEARER,
  //     },
  //   });
  //   if (res.ok) {
  //     const data = await res.json();
  //     setAllBookIds(data.records);
  //     console.log("allBookIds", allBookIds);
  //   }
  // };

  // const getRecordIdFromMyLibrary = (bookId) => {
  //   console.log("running function");
  //   // allBookIds.map((item) => {
  //   //   if (bookId === item.fields.bookId) {
  //   //     setRecordId(item.id);
  //   //   } else {
  //   //     console.log("book not in library");
  //   //   }
  //   // });

  //   for (const allBookId of allBookIds) {
  //     console.log({ bookId });
  //     console.log("fields", allBookIds.fields.bookId);

  //     if (bookId === allBookId.fields.bookId) {
  //       setRecordId(allBookId.id);
  //       console.log(recordId);
  //     } else {
  //       console.log("bookId not in myLibrary");
  //     }
  //   }
  // };

  // const removeBookFromMyLibrary = async () => {
  //   getAllBookIdFromMyLibrary();
  //   getRecordIdFromMyLibrary(props.bookId);

  //   const url = import.meta.env.VITE_MY_LIBRARY_URL;
  //   const res = await fetch(url + "/" + recordId, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: import.meta.env.VITE_AIRTABLE_BEARER,
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (res.ok) {
  //     console.log("removed from library");
  //   }
  // };

  const addBook = () => {
    setAddBookState(true);
    addBookToMyLibrary();
  };

  // const removeBook = () => {
  //   setAddBookState(false);
  //   // removeBookFromMyLibrary();
  // };

  return (
    <div className="bg-slate-100 rounded px-2 py-3 hover:scale-110">
      {/* {JSON.stringify(allBookIds)} */}

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
          // <button type="button" onClick={removeBook}>
          <LocalLibraryIcon></LocalLibraryIcon>
        ) : (
          // </button>
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
