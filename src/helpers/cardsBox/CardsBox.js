import React from 'react'
import ShowAll from '../showAll/ShowAll'
import styles from './cardsBox.module.css'

function CardsBox({ children, name = 'all tables' }) {
  return (
    <div className={styles.cardsBox}>
      <div className={styles.cardsBoxHeader}>
        <div className={styles.cardsBoxName}>{ name }</div>
        <ShowAll />
      </div>
      <div className={styles.cardsConatiner}>
        { children }
      </div>
    </div>
  )
}

export default CardsBox