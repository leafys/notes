import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NotePreview.module.scss";
import { Route } from "react-router";
import TexareaPreview from "./TexareaPreview/TexareaPreview";
import { useSelector, useDispatch } from "react-redux";
import { removeNotes } from "./../../../redux/actions/actions";

const NotePreview = ({ id, title, desc }) => {
  let path = "/notes/tested/" + id + "/area/" + id;

  const textareContent = useSelector((state) => state.note.noteData);
  const dispatch = useDispatch();

  const testRemoveNotes = () => {
    dispatch(removeNotes(id));
  };

  let texareaElements = textareContent.map((elements) => (
    <TexareaPreview
      key={elements.id}
      id={elements.id}
      title={elements.title}
      desc={elements.desc}
    />
  ));

  return (
    <div className={styles.notePreview}>
      <div className={styles.notePreview__header}>
        <NavLink to={path}>
          <button className={styles.notePreview__header__btnTwo}>Edit</button>
        </NavLink>
        <button
          onClick={() => testRemoveNotes()}
          className={styles.notePreview__header__btnTwo}
        >
          Delete
        </button>
      </div>

      <h1 className={styles.notePreview__title}>{title}</h1>

      <div className={styles.notePreview__markdown}>{desc}</div>

      <Route path="/notes/tested/1/area/1">{texareaElements[0]}</Route>
      <Route path="/notes/tested/2/area/2">{texareaElements[1]}</Route>
      <Route path="/notes/tested/3/area/3">{texareaElements[2]}</Route>
    </div>
  );
};

export default NotePreview;
