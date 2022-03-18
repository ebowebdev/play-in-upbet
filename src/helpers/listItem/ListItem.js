import React from 'react'
import styles from './listItem.module.css'

function ListItem({ category}) {
  return (
    <li className={styles.listItem}>
      <p>{category.name}</p>
      <span className={category.label ? styles.label : styles.notShow}>NEW</span>
    </li>
  )
}

export default ListItem