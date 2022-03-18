import React, { useContext, useMemo, memo } from "react";
import ListItem from "../listItem/ListItem";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { textsManager  } from '../../textsManager'
import styles from "./list.module.css";
import { Context } from "../../context/context";

function List() {
  const {
    data: { result },
  } = useContext(Context);
  
  const { listContent : { firstCategory, lastCategory }} = textsManager
  const categoriesObj = useMemo(() => {
    const all = result ? [...Object.values(result.categories)] : [];
    return all;
  }, [result]);

  return (
    <div className={styles.tablesHeart}>
      <span className={styles.heartSpan}>
        <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
      </span>
      <ul className={styles.list}>
        <ListItem category={{name:firstCategory}} key={firstCategory} />
        {categoriesObj?.map((item) => (
          <ListItem category={item} key={item} />
        ))}
        <ListItem category={{name:lastCategory}} key={lastCategory} />
      </ul>
    </div>
  );
}

export default memo(List);
