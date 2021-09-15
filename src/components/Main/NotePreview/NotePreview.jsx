import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import styles from "./NotePreview.module.scss";
import TextareaPreview from "./TexareaPreview/TextareaPreview";
import { useDispatch } from "react-redux";
import { removeNotes } from "./../../../redux/actions/actions";

const NotePreview = ({ id, title, desc }) => {
  // const router = useHistory();
  const [isHeaderVisible, setisHeaderVisible] = React.useState(true);
  let path = "/note/" + id + "/area";
  const dispatch = useDispatch();

  const testRemoveNotes = () => {
    // router.push("/note");
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
          onClick={() => testRemoveNotes()}
          className={styles.notePreview__header__btnTwo}
        >
          Delete
        </button>
      </div>

      {isHeaderVisible && (
        <>
          <h1 className={styles.notePreview__title}>{title}</h1>
          <div className={styles.notePreview__desc}>{desc}</div>
        </>
      )}

      <Route exact path={`/note/${id}/area`}>
        <TextareaPreview id={id} title={title} desc={desc} />
      </Route>
    </div>
  );
};

export default NotePreview;
