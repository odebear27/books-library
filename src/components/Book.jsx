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

  const removeBook = () => {
    setAddBookState(false);
    // removeBookFromMyLibrary();
  };

  return (
    <div>
      {/* {JSON.stringify(allBookIds)} */}
      {addBookState ? (
        <button type="button" onClick={removeBook}>
          <LocalLibraryIcon></LocalLibraryIcon>
        </button>
      ) : (
        <button type="button" onClick={addBook}>
          <LocalLibraryOutlinedIcon></LocalLibraryOutlinedIcon>
        </button>
      )}
      <NavLink to={`/bookdetail/${props.bookId}`}>
        <img src={props.img}></img>
      </NavLink>

      <p>{props.title}</p>
      <p>{props.author}</p>
    </div>
  );
};

export default Book;
