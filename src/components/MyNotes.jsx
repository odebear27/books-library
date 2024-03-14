import React, { useState, useEffect } from "react";
import MyNotesDisplay from "./MyNotesDisplay";

const MyNotes = ({ bookId }) => {
  const [myNotes, setMyNotes] = useState("");
  const [notesDisplay, setNotesDisplay] = useState([]);

  const handleChange = (event) => {
    setMyNotes(event.target.value);
  };

  const getAllNotes = async () => {
    const url = import.meta.env.VITE_MY_NOTES_URL;
    const res = await fetch(url, {
      headers: {
        Authorization: import.meta.env.VITE_AIRTABLE_BEARER,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setNotesDisplay(data.records);
    } else {
      console.log("an error occurred");
    }
  };

  const addNotes = async () => {
    const url = import.meta.env.VITE_MY_NOTES_URL;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: import.meta.env.VITE_AIRTABLE_BEARER,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          bookId: bookId,
          notes: myNotes,
        },
      }),
    });

    if (res.ok) {
      getAllNotes();
      setMyNotes("");
    } else {
      console.log("an error occurred");
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={myNotes}
        onChange={handleChange}
        placeholder="Add something..."
      ></input>
      <button type="button" onClick={addNotes}>
        Add
      </button>
      {/* {JSON.stringify(notesDisplay)} */}
      {notesDisplay &&
        notesDisplay.length > 0 &&
        notesDisplay.map((item, idx) =>
          // console.log("item", item);
          item.fields.bookId === bookId ? (
            <MyNotesDisplay
              key={idx}
              recordId={item.id}
              bookId={bookId}
              myNotes={myNotes}
              getAllNotes={getAllNotes}
            >
              {item.fields.notes}
            </MyNotesDisplay>
          ) : (
            ""
          )
        )}
    </div>
  );
};

export default MyNotes;
