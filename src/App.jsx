import React, { useState } from "react";
import MainPage from "./pages/MainPage";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <MainPage books={books} setBooks={setBooks}></MainPage>
    </div>
  );
}

export default App;
