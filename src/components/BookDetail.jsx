import React from "react";
import Button from "./Button";
import GooglePlayBadge from "./../../assets/google-play-badge-logo.svg";

const BookDetail = (props) => {
  return (
    <div className="container mx-3 mb-6">
      <div className="container flex mb-6">
        <img
          className="h-64 shadow-md shadow-colour-shadow"
          src={props.img}
        ></img>

        <div className="container grid-cols-5">
          <p className="text-2xl font-semibold mb-4">{props.title}</p>
          <p className="font-semibold mb-2">{props.authors}</p>
          <p>{props.isbn}</p>
          <p>{props.publisher}</p>
          <p className="text-sm">{props.publishedDate}</p>
        </div>
        <div className="flex justify-start mr-20">
          <a href={props.canonicalVolumeLink} target="_blank">
            <img
              className="h-32"
              src={GooglePlayBadge}
              alt="GET IT ON Google Play"
            />
          </a>
        </div>
      </div>

      {/* <p>{props.description}</p> */}
      <p className="text-2xl font-semibold mb-2">Description</p>
      <div dangerouslySetInnerHTML={{ __html: props.description }} />
      {/* <p>{props.canonicalVolumeLink}</p> */}
    </div>
  );
};

export default BookDetail;
