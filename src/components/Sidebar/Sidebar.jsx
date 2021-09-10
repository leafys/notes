import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import Notes from "./Notes/Notes";
import styles from "./Sidebar.module.scss";
import SidebarHeader from "./SidebarHeader/SidebarHeader";

const Sidebar = () => {
  const noteElements = useSelector((state) => state.note.noteData);

  let NotesElements = noteElements.map((elements) => (
    <Notes
      key={elements.id}
      id={elements.id}
      title={elements.title}
      desc={elements.desc}
    />
  ));

  return (
    <div className={styles.sidebar}>
      <Route path="" component={SidebarHeader} />

      {NotesElements}
    </div>
  );
};

export default Sidebar;
