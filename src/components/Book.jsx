import React from "react";

const Book = (props) => {
  return (
    <div>
      <img src={props.img}></img>
      <p>{props.title}</p>
      <p>{props.author}</p>
    </div>
  );
};

export default Book;
