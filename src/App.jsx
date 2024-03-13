import React, { useState } from "react";
import MainPage from "./pages/MainPage";

function App() {
  const [books, setBooks] = useState([]);
  const [noResults, setNoResults] = useState(false);

  return (
    <div>
      <MainPage
        books={books}
        setBooks={setBooks}
        noResults={noResults}
        setNoResults={setNoResults}
      ></MainPage>
    </div>
  );
}

export default App;
