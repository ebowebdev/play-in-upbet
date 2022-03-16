import React from 'react'
import styles from './card.module.css'

function Card() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        image
      </div>
      <div className={styles.cardFooter}>
        <div>Live-Sweet Candy</div>
        <div>Icon</div>
      </div>
    </div>
  )
}

export default Card