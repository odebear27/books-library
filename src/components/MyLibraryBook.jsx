import React from "react";
import { NavLink } from "react-router-dom";

const MyLibraryBook = (props) => {
  return (
    <div className="hover:scale-110">
      <NavLink to={`/bookdetail/${props.bookId}`}>
        <img
          className="shadow-md shadow-colour-shadow h-48 w-36 mb-1"
          src={props.img}
          alt={props.title}
        ></img>
      </NavLink>
      <p className="text-sm font-semibold line-clamp-3">{props.title}</p>
      <p className="text-sm line-clamp-3">{props.author}</p>
    </div>
  );
};

export default MyLibraryBook;
