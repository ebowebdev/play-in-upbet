import React from 'react'
import styles from './card.module.css'

function Card({ slot }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <img className={styles.img} src={slot.desktop_logo} alt="" />
        <div className={styles.cardHover}>
          <div className={styles.circle}>
            <span></span>
          </div>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div>{ slot.name }</div>
        <div>Icon</div>
      </div>
    </div>
  )
}

export default Card