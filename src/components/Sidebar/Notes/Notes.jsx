import React from "react";
import styles from "./Notes.module.scss";
import moment from "moment";
import { NavLink } from "react-router-dom";

const Notes = ({ id, title, desc }) => {
  let date = moment().format("YYYY-MM-DD");

  const navigate = "tested";
  let path = "/notes/" + navigate + "/" + id;

  return (
    <div className={styles.notes}>
      <NavLink
        activeClassName={styles.active}
        className={styles.link}
        to={path}
      >
        <div className={styles.notes__note}>
          <strong>{title}</strong>
          <p className={styles.notes__note__desc}>{desc}</p>
          <small className={styles.notes__note__text}>{date}</small>
        </div>
      </NavLink>
    </div>
  );
};

export default Notes;
