import React, { memo } from 'react'
import styles from "./navbar.module.css";

const categoriesList = [
  "sport",
  "live",
  "casino",
  "live casino",
  "virtual",
  "race",
  "aviator",
  "bonus",
];

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>UP</span>bet
        </div>
        <div className={styles.navbarList}>
          <ul className={styles.list}>
            {categoriesList.map((category) => (
              <li>{category}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(NavBar);
