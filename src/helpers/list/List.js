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
    const newAll = all.filter(item => item.name !== 'New Entry')
    return newAll;
  }, [result]);

  return (
    <div className={styles.tablesHeart}>
      <span className={styles.heartSpan}>
        <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
      </span>
      <ul className={styles.list}>
        <ListItem category={{name:firstCategory}} />
        {categoriesObj?.map((item, index) => (
          <ListItem category={item} key={index} />
        ))}
        <ListItem category={{name:lastCategory}} />
      </ul>
    </div>
  );
}

export default memo(List);
