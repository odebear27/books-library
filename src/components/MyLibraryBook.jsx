import React from "react";

const MyLibraryBook = (props) => {
  return (
    <div>
      <img src={props.img}></img>
      <p>{props.title}</p>
      <p>{props.author}</p>
    </div>
  );
};

export default MyLibraryBook;
