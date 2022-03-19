import React, { useContext, useMemo, memo } from "react";
import List from "../../helpers/list/List";
import Search from "../../helpers/search/Search";
import CardsBox from "../../helpers/cardsBox/CardsBox";
import Card from "../../helpers/card/Card";
import styles from "./listContent.module.css";
import { Context } from "../../context/context";

function ListContent() {
  const {
    data: { result },
  } = useContext(Context);

  const providers = useMemo(() => {
    const all = result ? [...Object.values(result.providers)] : [];
    return all;
  }, [result]);

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <div className={styles.listBar}>
          <List />
          <div className={styles.searchBox}>
            <Search />
          </div>
        </div>
        <div>
          {providers.map((provider) => (
            <CardsBox provider={provider}>
              {provider.slots.map((slot) => (
                <Card slot={slot} />
              ))}
            </CardsBox>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(ListContent);
