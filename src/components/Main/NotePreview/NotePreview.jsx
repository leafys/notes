import React, { useEffect, useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import styles from "./NotePreview.module.scss";
import TextareaPreview from "./TexareaPreview/TextareaPreview";
import { useDispatch } from "react-redux";
import { removeNotes } from "./../../../redux/actions/actions";
import Modal from "./Modal/Modal";

const NotePreview = ({ id, title, desc }) => {
  const router = useHistory();
  const [isHeaderVisible, setisHeaderVisible] = React.useState(true);
  let path = "/note/" + id + "/area";
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);

  const testRemoveNotes = () => {
    router.push("/");
    dispatch(removeNotes(id));
  };

  useEffect(() => {
    setisHeaderVisible(true);
  }, [id]);

  return (
    <div className={styles.notePreview}>
      <div className={styles.notePreview__header}>
        <Link to={path}>
          <button
            onClick={() => setisHeaderVisible(false)}
            className={styles.notePreview__header__btnTwo}
          >
            Edit
          </button>
        </Link>
        <button
          onClick={() => setModalActive(true)}
          className={styles.notePreview__header__btnTwo}
        >
          Delete
        </button>
      </div>

      {isHeaderVisible && (
        <>
          <h1 className={styles.notePreview__title}>{title}</h1>
          <p className={styles.notePreview__desc}>{desc}</p>
        </>
      )}

      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.notePreview__modalText}>
          <h2 className={styles.notePreview__modalText__title}>Warning!</h2>

          <p className={styles.notePreview__modalText__desc}>
            Are you sure you want to delete the selected note?
          </p>
        </div>
        <div className={styles.notePreview__modalWindow__btn}>
          <button
            onClick={() => testRemoveNotes()}
            className={styles.notePreview__modalWindow__btnDelete}
          >
            Delete
          </button>
          <button
            onClick={() => setModalActive(false)}
            className={styles.notePreview__modalWindow__btnClose}
          >
            Close
          </button>
        </div>
      </Modal>

      <Route exact path={`/note/${id}/area`}>
        <TextareaPreview id={id} title={title} desc={desc} />
      </Route>
    </div>
  );
};

export default NotePreview;
