import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyLibraryBook from "../components/MyLibraryBook";
import MyNotes from "../components/MyNotes";
import BookDetail from "../components/BookDetail";

const BookDetailPage = () => {
  const params = useParams();
  const [bookDetail, setBookDetail] = useState({
    bookId: "",
    img: "",
    title: "",
    authors: "",
    isbn: "",
    publisher: "",
    publishedDate: "",
    description: "",
    canonicalVolumeLink: "",
  });

  const getBookById = async () => {
    const url =
      import.meta.env.VITE_URL +
      "/" +
      params.id +
      "?key=" +
      import.meta.env.VITE_KEY;

    const res = await fetch(url);

    if (res.ok) {
      const data = await res.json();
      // console.log(data.saleInfo);
      setBookDetail({
        bookId: data.id,
        img: data.volumeInfo.imageLinks
          ? data.volumeInfo.imageLinks.small
          : "No image available",
        title: data.volumeInfo.title
          ? data.volumeInfo.title
          : "No title available",
        authors: data.volumeInfo.authors
          ? data.volumeInfo.authors.join(", ")
          : "No authors available",
        isbn: data.volumeInfo.industryIdentifiers
          ? "ISBN " + data.volumeInfo.industryIdentifiers[0].identifier
          : "No ISBN available",
        publisher: data.volumeInfo.publisher
          ? data.volumeInfo.publisher
          : "No publisher available",
        publishedDate: data.volumeInfo.publishedDate
          ? data.volumeInfo.publishedDate
          : "No published date available",
        description: data.volumeInfo.description
          ? data.volumeInfo.description
          : "No description available",
        canonicalVolumeLink: data.volumeInfo.canonicalVolumeLink
          ? data.volumeInfo.canonicalVolumeLink
          : "No link available",
      });
    }
  };

  useEffect(() => {
    getBookById();
  }, []);

  return (
    <div>
      <h1>Book Detail Page</h1>
      {/* <h6>id {params.id}</h6> */}
      {/* {JSON.stringify(bookDetail.bookId)} */}
      {/* <img src={bookDetail.img}></img>
      <p>{bookDetail.title}</p>
      <p>{bookDetail.authors}</p>
      <p>ISBN {bookDetail.isbn}</p>
      <p>{bookDetail.publisher}</p>
      <p>{bookDetail.publishedDate}</p>
      <p>{bookDetail.description}</p>
      <p>{bookDetail.canonicalVolumeLink}</p> */}

      <BookDetail
        img={bookDetail.img}
        title={bookDetail.title}
        authors={bookDetail.authors}
        isbn={bookDetail.isbn}
        publisher={bookDetail.publisher}
        publishedDate={bookDetail.publishedDate}
        description={bookDetail.description}
        canonicalVolumeLink={bookDetail.canonicalVolumeLink}
      ></BookDetail>
      <MyNotes bookId={bookDetail.bookId}></MyNotes>
    </div>
  );
};

export default BookDetailPage;
