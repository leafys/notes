import React from "react";
import { Link, Route } from "react-router-dom";
import styles from "./NotePreview.module.scss";
import TextareaPreview from "./TexareaPreview/TextareaPreview";
import { useDispatch } from "react-redux";
import { removeNotes } from "./../../../redux/actions/actions";

const NotePreview = ({ id, title, desc }) => {
  let path = "/note/" + id + "/area";
  const dispatch = useDispatch();
  const testRemoveNotes = () => {
    dispatch(removeNotes(id));
  };

  return (
    <div className={styles.notePreview}>
      <div className={styles.notePreview__header}>
        <Link to={path}>
          <button className={styles.notePreview__header__btnTwo}>Edit</button>
        </Link>
        <button
          onClick={() => testRemoveNotes()}
          className={styles.notePreview__header__btnTwo}
        >
          Delete
        </button>
      </div>

      <h1 className={styles.notePreview__title}>{title}</h1>

      <div className={styles.notePreview__markdown}>{desc}</div>

      <Route exact path={`/note/${id}/area`}>
        <TextareaPreview id={id} title={title} desc={desc} />
      </Route>
    </div>
  );
};

export default NotePreview;
