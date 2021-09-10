import React, { useState } from "react";
import styles from "./TexareaPreview.module.scss";

const TexareaPreview = ({ title, desc }) => {
  const [titles, setTitle] = useState(title);
  const [descs, setDesc] = useState(desc);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const descHandler = (e) => {
    setDesc(e.target.value);
  };

  return (
    <div className={styles.texareaPreview}>
      <div>{titles}</div>
      <div>{descs}</div>
      <textarea
        onChange={(e) => titleHandler(e)}
        value={titles}
        cols="185"
        rows="10"
      ></textarea>

      <textarea
        onChange={(e) => descHandler(e)}
        value={descs}
        cols="185"
        rows="10"
      ></textarea>
    </div>
  );
};

export default TexareaPreview;
