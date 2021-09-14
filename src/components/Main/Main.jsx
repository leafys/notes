import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Main.module.scss";
import NotePreview from "./NotePreview/NotePreview";

const Main = () => {
  const { noteData: notes } = useSelector((state) => state.note);
  const { id } = useParams();
  const currentNote = notes.find((el) => el.id === +id);

  return (
    <div className={styles.main}>
      {currentNote && (
        <NotePreview
          id={currentNote.id}
          title={currentNote.title}
          desc={currentNote.desc}
        />
      )}
    </div>
  );
};

export default Main;
