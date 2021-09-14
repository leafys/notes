import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TextareaPreview.module.scss";
import { changeInput } from "../../../../redux/actions/actions";

const TexareaPreview = ({ title, desc }) => {
  const dispatch = useDispatch();
  const { noteData: notes } = useSelector((state) => state.note);

  const changeData = (id) => {
    dispatch(changeInput(notes.id));
  };

  return (
    <div className={styles.texareaPreview}>
      <p> {title} </p>
      <textarea
        className={styles.texareaPreview__area}
        onChange={changeData}
        cols="185"
        rows="10"
      ></textarea>

      <p>{desc}</p>
      <textarea
        className={styles.texareaPreview__area}
        onChange={changeData}
        cols="185"
        rows="10"
      ></textarea>
    </div>
  );
};

export default TexareaPreview;
