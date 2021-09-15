import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import moment from "moment";

const Sidebar = () => {
  const noteElements = useSelector((state) => state.note.noteData);
  let date = moment().format("YYYY-MM-DD");
  const [searchNote, setSearchNote] = useState("");

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <h1 className={styles.sidebar__header__title}>
          <Link className={styles.sidebar__header__link} to="/">
            Notes
          </Link>
        </h1>
        <input
          className={styles.sidebar__header__search}
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchNote(event.target.value);
          }}
        />
      </div>
      {noteElements
        .filter((e) => {
          if (searchNote === "") {
            return e;
          } else if (e.title.toLowerCase().includes(searchNote.toLowerCase())) {
            return e;
          } else {
            return "";
          }
        })
        .map((note) => (
          <div key={note.id}>
            <Link className={styles.sidebar__link} to={`/note/${note.id}`}>
              <div className={styles.sidebar__notes}>
                <strong>{note.title}</strong>
                <small className={styles.sidebar__notes__text}>{date}</small>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
