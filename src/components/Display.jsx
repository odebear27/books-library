import React from "react";
import Book from "./Book";

const Display = ({ books, noResults }) => {
  return (
    <div className="container justify-center py-4">
      {noResults ? (
        <p>no results returned</p>
      ) : (
        <div className="m-auto grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 overflow-hidden p-3">
          {books &&
            books.length > 0 &&
            books.map((item, idx) => {
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
                ></Book>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Display;
