import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyLibraryPage from "./pages/MyLibraryPage";
import BookDetailPage from "./pages/BookDetailPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="mylibrary" element={<MyLibraryPage />} />
        <Route path="bookdetail/:id" element={<BookDetailPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
