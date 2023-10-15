import React from "react";
import styles from "../SearchInput/search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ handleChange, handleSubmit, value }) => {
  const handleKeyDown = (event) => {
    // Check if the pressed key is the Enter key (keycode 13)
    if (event.keyCode === 13) {
      // Call your function here, for example:
      handleSubmit();
    }
  };
  return (
    <div className={styles.search__container}>
      <input
        onKeyDown={handleKeyDown}
        className={styles.search__input}
        type="search"
        name="search"
        id="search"
        defaultValue={value}
        onChange={(e) => handleChange(e)}
      />
      <button className={styles.search_btn} onClick={handleSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default SearchInput;
