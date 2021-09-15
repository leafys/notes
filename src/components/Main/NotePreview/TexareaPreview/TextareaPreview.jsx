import React from "react";
import { useDispatch } from "react-redux";
import styles from "./TextareaPreview.module.scss";
import { changeDesc, changeTitle } from "../../../../redux/actions/actions";

const TexareaPreview = ({ title, desc, id }) => {
  const dispatch = useDispatch();

  const updateDesc = (value) => {
    dispatch(changeDesc({ id, value }));
  };

  const updateTitle = (value) => {
    dispatch(changeTitle({ id, value }));
  };

  return (
    <div className={styles.texareaPreview}>
      <div className={styles.texareaPreview__blockTitle}>
        <div>
          <h4 className={styles.texareaPreview__blockTitle__title}>{title}</h4>
        </div>
        <textarea
          maxLength="60"
          value={title}
          className={styles.texareaPreview__blockTitle__area}
          onChange={(e) => updateTitle(e.target.value)}
          cols="185"
          rows="10"
        ></textarea>
      </div>

      <div className={styles.texareaPreview__blockDesc}>
        <div>
          <h4 className={styles.texareaPreview__blockDesc__desc}>{desc}</h4>
        </div>
        <textarea
          maxLength="225"
          value={desc}
          className={styles.texareaPreview__blockDesc__area}
          onChange={(e) => updateDesc(e.target.value)}
          cols="185"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
};

export default TexareaPreview;
