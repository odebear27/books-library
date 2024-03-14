import React from "react";
import Book from "./Book";

const Display = ({ books, noResults }) => {
  return (
    <div>
      {noResults}
      {/* {JSON.stringify(books)} */}
      {/* main page display */}
      {noResults ? (
        <p>no results returned</p>
      ) : (
        <div>
          {books &&
            books.length > 0 &&
            books.map((item, idx) => {
              // console.log("Authors:", item.volumeInfo.authors);
              // console.log("Img:", item.volumeInfo.imageLinks);
              // console.log(idx);
              return (
                <Book
                  key={idx}
                  bookId={item.id}
                  img={
                    item.volumeInfo.imageLinks
                      ? item.volumeInfo.imageLinks.smallThumbnail
                      : "No image available"
                  }
                  title={
                    item.volumeInfo.title
                      ? item.volumeInfo.title
                      : "Title unknown"
                  }
                  author={
                    item.volumeInfo.authors
                      ? item.volumeInfo.authors.join(", ")
                      : "Author unknown"
                  }
                  // recordId={item.id}
                ></Book>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Display;
