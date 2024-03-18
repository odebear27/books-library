import React, { useState, useEffect } from "react";
import MyNotesDisplay from "./MyNotesDisplay";
import Button from "./Button";
import Input from "./Input";

const MyNotes = ({ bookId }) => {
  const [myNotes, setMyNotes] = useState("");
  const [notesDisplay, setNotesDisplay] = useState([]);
  const [myNotesPassValidation, setMyNotesPassValidation] = useState(true);

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
    if (myNotes.length > 0 && myNotes.length <= 300) {
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
        setMyNotesPassValidation(true);
      } else {
        console.log("an error occurred");
      }
    } else {
      console.log("input must not be blank");
      setMyNotesPassValidation(false);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className="container mx-3">
      <p className="text-2xl font-semibold mb-2">Notes</p>
      <div className="mb-6 flex items-center">
        <div className="flex-grow">
          <Input
            value={myNotes}
            onChange={handleChange}
            placeholder="Add something..."
          ></Input>

          {!myNotesPassValidation && (
            <p className="text-xs text-colour-red font-medium">
              please enter something
            </p>
          )}
          <div className="ml-3">
            <Button onClick={addNotes}>add</Button>
          </div>
        </div>
      </div>

      {notesDisplay &&
        notesDisplay.length > 0 &&
        notesDisplay.map((item, idx) =>
          item.fields.bookId === bookId ? (
            <MyNotesDisplay
              key={idx}
              recordId={item.id}
              bookId={bookId}
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
