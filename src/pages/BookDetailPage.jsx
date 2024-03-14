import React from "react";
import { useParams } from "react-router-dom";

const BookDetailPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>Book Detail Page {params.id}</h1>
    </div>
  );
};

export default BookDetailPage;
