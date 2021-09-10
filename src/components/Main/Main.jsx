import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import styles from "./Main.module.scss";
import NotePreview from "./NotePreview/NotePreview";

const Main = () => {
  const noteMainEl = useSelector((state) => state.note.noteData);

  let mainElements = noteMainEl.map((elements) => (
    <NotePreview
      key={elements.id}
      id={elements.id}
      title={elements.title}
      desc={elements.desc}
    />
  ));

  return (
    <div className={styles.main}>
      <Route path="/notes/tested/1">{mainElements[0]}</Route>
      <Route path="/notes/tested/2">{mainElements[1]}</Route>
      <Route path="/notes/tested/3">{mainElements[2]}</Route>
    </div>
  );
};

export default Main;
