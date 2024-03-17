import React, { useState, useEffect } from "react";
import MyLibraryBook from "./MyLibraryBook";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

const MyLibraryDisplay = ({ myLibraryBooks }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (myLibraryBooks && myLibraryBooks.length > 0) {
      setIsLoading(false);
    }
  }, [myLibraryBooks]);

  const GreyCircularProgress = styled(CircularProgress)({
    color: "grey",
  });

  return (
    <div className="container justify-center mx-3 min-h-screen flex items-center relative max-w-full">
      <div className="m-auto grid gap-8 justify-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 overflow-hidden p-3">
        {isLoading ? (
          <div className="flex justify-center w-full absolute top-1/4 right-1/4 transform translate-x-1/4 -translate-y-1/4">
            <GreyCircularProgress></GreyCircularProgress>
          </div>
        ) : // <p>is loading</p>
        myLibraryBooks && myLibraryBooks.length > 0 ? (
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
    </div>
  );
};

export default MyLibraryDisplay;
