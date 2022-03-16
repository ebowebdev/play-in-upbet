import React, {useContext} from "react";
import List from "../../helpers/list/List";
import Search from "../../helpers/search/Search";
import CardsBox from '../../helpers/cardsBox/CardsBox'
import Card from '../../helpers/card/Card'
import styles from "./listContent.module.css";
import { Context } from '../../context/context'

function ListContent() {
  const { state } = useContext(Context)
  console.log('state in listContent --', state)
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
        <div>
          <CardsBox>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardsBox>
        </div>
      </div>
    </div>
  );
}

export default ListContent;
