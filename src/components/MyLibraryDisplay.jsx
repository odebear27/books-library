import React, { useState, useEffect } from "react";
import MyLibraryBook from "./MyLibraryBook";

const MyLibraryDisplay = ({ myLibraryBooks }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (myLibraryBooks && myLibraryBooks.length > 0) {
      setIsLoading(false);
    }
  }, [myLibraryBooks]);

  return (
    <div>
      {isLoading ? (
        <p>is loading</p>
      ) : myLibraryBooks && myLibraryBooks.length > 0 ? (
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

      {/* {myLibraryBooks && myLibraryBooks.length > 0 ? (
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
      )} */}
    </div>
  );
};

export default MyLibraryDisplay;
