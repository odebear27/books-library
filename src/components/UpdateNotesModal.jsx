import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Input from "./Input";

const OverLay = (props) => {
  // const noteRef = useRef();
  const [note, setNote] = useState("");

  const updateNote = async () => {
    console.log("recordId", props.recordId);
    // console.log("notes", noteRef.current.value);

    if (
      // noteRef.current.value.length > 0 &&
      // noteRef.current.value.length < 300
      note.length > 0 &&
      note.length < 300
    ) {
      const url = import.meta.env.VITE_MY_NOTES_URL + "/" + props.recordId;
      const res = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_AIRTABLE_BEARER,
        },
        body: JSON.stringify({
          fields: {
            bookId: props.bookId,
            // notes: noteRef.current.value,
            notes: note,
          },
        }),
      });
      if (res.ok) {
        // noteRef.current.value = "";
        props.setShowUpdateNoteModal(false);
        props.getAllNotes();
      } else {
        console.log("an error occurred");
      }
    } else {
      console.log("input cannot be blank");
    }
  };

  return (
    <>
      {/* <input ref={noteRef} type="text" defaultValue={props.myNotes}></input> */}
      <Input
        value={note}
        onChange={(event) => setNote(event.target.value)}
      ></Input>
      {/* <button type="button" onClick={updateNote}>
        update
      </button> */}
      <Button onClick={updateNote}>Update</Button>
      <Button onClick={() => props.setShowUpdateNoteModal(false)}>
        Cancel
      </Button>
    </>
  );
};

const UpdateNotesModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          recordId={props.recordId}
          bookId={props.bookId}
          myNotes={props.myNotes}
          setShowUpdateNoteModal={props.setShowUpdateNoteModal}
          getAllNotes={props.getAllNotes}
        ></OverLay>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UpdateNotesModal;
