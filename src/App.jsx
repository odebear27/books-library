import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyLibraryPage from "./pages/MyLibraryPage";
import BookDetailPage from "./pages/BookDetailPage";
import NavBar from "./components/NavBar";

function App() {
  const [books, setBooks] = useState([]);
  const [noResults, setNoResults] = useState(false);

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              books={books}
              setBooks={setBooks}
              noResults={noResults}
              setNoResults={setNoResults}
            />
          }
        />
        <Route path="mylibrary" element={<MyLibraryPage />} />
        <Route path="bookdetail/:id" element={<BookDetailPage />} />
      </Routes>

      {/* <MainPage
        books={books}
        setBooks={setBooks}
        noResults={noResults}
        setNoResults={setNoResults}
      ></MainPage> */}
    </div>
  );
}

export default App;
