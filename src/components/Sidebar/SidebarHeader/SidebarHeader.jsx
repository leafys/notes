import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SidebarHeader.module.scss";

const SidebarHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>
        <NavLink to="">Notes</NavLink>
      </h1>
    </div>
  );
};

export default SidebarHeader;
