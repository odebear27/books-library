import React from "react";
import Form from "../components/Form";
import Display from "../components/Display";

const MainPage = ({ books, setBooks }) => {
  return (
    <div>
      <Form setBooks={setBooks}></Form>
      <Display books={books}></Display>
    </div>
  );
};

export default MainPage;
