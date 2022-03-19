import React , { memo } from 'react'
import styles from './card.module.css'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ slot }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <img className={styles.img} src={slot.desktop_logo} alt="enjoy your time" />
        <div className={styles.playImgBox}>
          <img className={styles.playImg} src="images/play.svg" alt="Show the table" /> 
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div>{ slot.name }</div>
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  )
}

export default memo(Card)