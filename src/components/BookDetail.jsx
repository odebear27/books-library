import React from "react";

const BookDetail = (props) => {
  return (
    <div>
      <img src={props.img}></img>
      <p>{props.title}</p>
      <p>{props.authors}</p>
      <p>ISBN {props.isbn}</p>
      <p>{props.publisher}</p>
      <p>{props.publishedDate}</p>
      <p>{props.description}</p>
      <p>{props.canonicalVolumeLink}</p>
    </div>
  );
};

export default BookDetail;
