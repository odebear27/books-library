import React from "react";
import { NavLink } from "react-router-dom";

const MyLibraryBook = (props) => {
  return (
    <div className="bg-colour-white rounded px-2 py-3 hover:scale-110 ease-in duration-200">
      <div className="flex justify-center">
        <NavLink to={`/bookdetail/${props.bookId}`}>
          <img
            className="shadow-md shadow-colour-shadow h-48 w-36 mb-1 text-sm"
            src={props.img}
            alt={props.title}
          ></img>
        </NavLink>
      </div>
      <p className="text-sm font-semibold line-clamp-3 mx-1.5">{props.title}</p>
      <p className="text-sm line-clamp-3 mx-1.5">{props.author}</p>
    </div>
  );
};

export default MyLibraryBook;
