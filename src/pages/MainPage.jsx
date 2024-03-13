import React from "react";
import Form from "../components/Form";
import Display from "../components/Display";

const MainPage = ({ books, setBooks, noResults, setNoResults }) => {
  return (
    <div>
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
