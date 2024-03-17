import React, { useState, useEffect } from "react";
import MyLibraryDisplay from "../components/MyLibraryDisplay";

const MyLibraryPage = () => {
  const [myLibraryBooks, setMyLibraryBooks] = useState(null);

  const getBooksFromMyLibrary = async () => {
    console.log("enter");
    const url = import.meta.env.VITE_MY_LIBRARY_URL;
    const res = await fetch(url, {
      headers: {
        Authorization: import.meta.env.VITE_AIRTABLE_BEARER,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setMyLibraryBooks(data.records);
    } else {
      console.log("an error occurred");
    }
  };

  useEffect(() => {
    getBooksFromMyLibrary();
  }, []);

  return (
    <div className="bg-library bg-cover container pt-20">
      {/* {JSON.stringify(myLibraryBooks)} */}
      <MyLibraryDisplay myLibraryBooks={myLibraryBooks}></MyLibraryDisplay>
    </div>
  );
};

export default MyLibraryPage;
