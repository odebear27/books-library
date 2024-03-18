import React, { useState } from "react";
import UpdateNotesModal from "./UpdateNotesModal";
import Button from "./Button";

const MyNotesDisplay = (props) => {
  const [showUpdateNoteModal, setShowUpdateNoteModal] = useState(false);

  return (
    <div className="container flex mb-6">
      <div className="grid-rows-2">
        <p className="mb-px">{props.children}</p>
        <Button onClick={() => setShowUpdateNoteModal(true)}>update</Button>
      </div>

      {showUpdateNoteModal && (
        <UpdateNotesModal
          recordId={props.recordId}
          bookId={props.bookId}
          setShowUpdateNoteModal={setShowUpdateNoteModal}
          getAllNotes={props.getAllNotes}
        ></UpdateNotesModal>
      )}
    </div>
  );
};

export default MyNotesDisplay;
