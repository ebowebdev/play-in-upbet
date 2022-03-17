import React from 'react'
import styles from './listItem.module.css'

function ListItem({ category}) {
  return (
    <li className={styles.listItem}>
      {category.name}
      <span className={category.label ? styles.label : styles.notShow}>NEW</span>
    </li>
  )
}

export default ListItem