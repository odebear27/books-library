import React, { useState } from "react";
import Form from "../components/Form";
import Display from "../components/Display";

const MainPage = () => {
  const [books, setBooks] = useState([]);
  const [noResults, setNoResults] = useState(false);

  return (
    <div className="bg-library bg-cover bg-center container pt-20">
      <Form
        setBooks={setBooks}
        setNoResults={setNoResults}
        noResults={noResults}
      ></Form>
      <Display books={books} noResults={noResults}></Display>
    </div>
  );
};

export default MainPage;
