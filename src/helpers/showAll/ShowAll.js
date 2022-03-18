import React from 'react'
import { textsManager } from '../../textsManager'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './showAll.module.css'

function ShowAll() {
  return (
    <div className={styles.btnBox}>
      <a href=".">
        { textsManager.listContent.showAll }
      </a>
      <FontAwesomeIcon icon={faAngleRight}/>
    </div>
  )
}

export default ShowAll