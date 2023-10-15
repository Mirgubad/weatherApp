import React from "react";
import styles from "../AppHeader/appHeader.module.css";

const AppHeader = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

export default AppHeader;
