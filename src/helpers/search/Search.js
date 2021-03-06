import React , { memo } from 'react'
import { faIndent, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { textsManager } from '../../textsManager'
import styles from "./search.module.css";

function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.inputBtnLine}>
        <div className={styles.inputBtn}>
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

export default memo(Search);
