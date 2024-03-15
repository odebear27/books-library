import React, { useState } from "react";
import UpdateNotesModal from "./UpdateNotesModal";
import Button from "./Button";

const MyNotesDisplay = (props) => {
  const [showUpdateNoteModal, setShowUpdateNoteModal] = useState(false);

  return (
    <div>
      <p>{props.children}</p>
      {/* <button type="button" onClick={() => setShowUpdateNoteModal(true)}>
        Update
      </button> */}
      <Button onClick={() => setShowUpdateNoteModal(true)}>Update</Button>
      {showUpdateNoteModal && (
        <UpdateNotesModal
          recordId={props.recordId}
          bookId={props.bookId}
          // myNotes={props.myNotes}
          setShowUpdateNoteModal={setShowUpdateNoteModal}
          getAllNotes={props.getAllNotes}
        ></UpdateNotesModal>
      )}
    </div>
  );
};

export default MyNotesDisplay;
