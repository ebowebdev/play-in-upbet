import React from "react";
import List from "../../helpers/list/List";
import Search from "../../helpers/search/Search";

import styles from "./listContent.module.css";

function ListContent() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <div className={styles.listBar}>
          <div className={styles.tablesList}>
            <List />
          </div>
          <div className={styles.searchBox}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListContent;
