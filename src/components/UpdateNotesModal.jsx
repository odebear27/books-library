import React, { useRef } from "react";
import ReactDOM from "react-dom";

const OverLay = (props) => {
  const noteRef = useRef();

  const updateNote = async () => {
    console.log("recordId", props.recordId);
    console.log("notes", noteRef.current.value);

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
          notes: noteRef.current.value,
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
  };

  return (
    <>
      <input ref={noteRef} type="text" defaultValue={props.myNotes}></input>
      <button type="button" onClick={updateNote}>
        update
      </button>
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
