import React from "react";
import { NavLink } from "react-router-dom";

const MyLibraryBook = (props) => {
  return (
    <div>
      <NavLink to={`/bookdetail/${props.bookId}`}>
        <img src={props.img}></img>
      </NavLink>
      <p>{props.title}</p>
      <p>{props.author}</p>
    </div>
  );
};

export default MyLibraryBook;
