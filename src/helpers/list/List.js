import React from 'react'
import ListItem from '../listItem/ListItem'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './list.module.css'

const list = ['play poker', 'casino', 'lotto','play poker', 'casino', 'lotto']

function List() {
  return (
    <div className={styles.tablesHeart}>
      <span className={styles.heartSpan}>
        <FontAwesomeIcon className={styles.heartIcon} icon={faHeart}/>
      </span>
      <ul className={styles.list}>
        {list.map(item => <ListItem name={item}/>)}
      </ul>
    </div>
  )
}

export default List