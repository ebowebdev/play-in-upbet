import React , { memo } from 'react'
import ShowAll from '../showAll/ShowAll'
import styles from './cardsBox.module.css'

function CardsBox({ children }) {
  
  return (
    <div className={styles.cardsBox}>
      <div className={styles.cardsBoxHeader}>
        <div className={styles.cardsBoxName}>All Game</div>
        <ShowAll />
      </div>
      <div className={styles.cardsConatiner}>
        { children }
      </div>
    </div>
  )
}

export default memo(CardsBox)