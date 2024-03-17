import React, { useState } from "react";
import UpdateNotesModal from "./UpdateNotesModal";
import Button from "./Button";

const MyNotesDisplay = (props) => {
  const [showUpdateNoteModal, setShowUpdateNoteModal] = useState(false);

  return (
    <div className="container flex mb-6">
      <div className="grid-rows-2">
        <p className="mb-px">{props.children}</p>

        {/* <button type="button" onClick={() => setShowUpdateNoteModal(true)}>
     Update
   </button> */}

        <Button onClick={() => setShowUpdateNoteModal(true)}>Update</Button>
      </div>

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
