import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Input from "./Input";

const OverLay = (props) => {
  const [noteToUpdate, setNoteToUpdate] = useState("");
  const [noteToUpdatePassValidation, setNoteToUpdatePassValidation] =
    useState(true);

  const updateNote = async () => {
    console.log("recordId", props.recordId);

    if (noteToUpdate.length > 0 && noteToUpdate.length < 300) {
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
            notes: noteToUpdate,
          },
        }),
      });
      if (res.ok) {
        props.setShowUpdateNoteModal(false);
        props.getAllNotes();
        setNoteToUpdatePassValidation(true);
      } else {
        console.log("an error occurred");
      }
    } else {
      console.log("input cannot be blank");
      setNoteToUpdatePassValidation(false);
    }
  };

  return (
    <div className="z-10 w-screen h-screen bg-gray-800/75 fixed top-0 left-0 flex justify-center items-center">
      <div className="z-100 bg-white fixed top-1/4 left-1/3 w-1/3 overflow-hidden py-5 rounded-md">
        <p className="mx-4 mb-2">Update Note</p>
        <div className="container flex justify-center">
          <div className="flex flex-col mb-4">
            <Input
              value={noteToUpdate}
              onChange={(event) => setNoteToUpdate(event.target.value)}
              placeholder="Type something..."
            ></Input>

            {!noteToUpdatePassValidation && (
              <p className="text-xs text-colour-red font-medium">
                please enter something
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-between mx-4">
          <Button onClick={updateNote}>update</Button>
          <Button onClick={() => props.setShowUpdateNoteModal(false)}>
            cancel
          </Button>
        </div>
      </div>
    </div>
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
