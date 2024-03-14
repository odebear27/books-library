import React, { useContext } from "react";
import MyLibraryBook from "./MyLibraryBook";

const MyLibraryDisplay = ({ myLibraryBooks }) => {
  return (
    <div>
      {myLibraryBooks && myLibraryBooks.length > 0 ? (
        myLibraryBooks.map((item, idx) => {
          console.log(item);
          return (
            <MyLibraryBook
              key={idx}
              bookId={item.fields.bookId}
              img={item.fields.bookImg}
              title={item.fields.bookTitle}
              author={item.fields.bookAuthor}
            ></MyLibraryBook>
          );
        })
      ) : (
        <p>No books have been saved to your library</p>
      )}
    </div>
  );
};

export default MyLibraryDisplay;
