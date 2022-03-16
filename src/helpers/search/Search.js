import React from "react";
import { faIndent, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { textsManager } from '../../textsManager'
import styles from "./search.module.css";

function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.inputBnLine}>
        <div className={styles.inputBn}>
          <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
          <span>{ textsManager.listContent.input }</span>
        </div>
      </div>
      <div className={styles.providers}>
        <span>Providers</span>
        <FontAwesomeIcon className={styles.indentIcon} icon={faIndent} />
      </div>
    </div>
  );
}

export default Search;
