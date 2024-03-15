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
        img: data.volumeInfo.imageLinks.small,
        title: data.volumeInfo.title,
        authors: data.volumeInfo.authors.join(", "),
        isbn: data.volumeInfo.industryIdentifiers[0].identifier,
        publisher: data.volumeInfo.publisher,
        publishedDate: data.volumeInfo.publishedDate,
        description: data.volumeInfo.description,
        canonicalVolumeLink: data.volumeInfo.canonicalVolumeLink,
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
