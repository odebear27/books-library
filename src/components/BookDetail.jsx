import React from "react";
import Button from "./Button";

const BookDetail = (props) => {
  return (
    <div>
      <img src={props.img}></img>
      <p>{props.title}</p>
      <p>{props.authors}</p>
      <p>{props.isbn}</p>
      <p>{props.publisher}</p>
      <p>{props.publishedDate}</p>
      {/* <p>{props.description}</p> */}
      <div dangerouslySetInnerHTML={{ __html: props.description }} />
      {/* <p>{props.canonicalVolumeLink}</p> */}
      <a href={props.canonicalVolumeLink} target="_blank">
        <Button>Open in Google Play Store</Button>
      </a>
    </div>
  );
};

export default BookDetail;
