import React , { memo } from 'react'
import styles from './listItem.module.css'

function ListItem({ category}) {
  const text = 'All Games'
  return (
    <li className={styles.listItem}>
      <p className={category.name === text ? styles.text : ''}>{category.name}</p>
      <span className={category.label ? styles.label : styles.notShow}>NEW</span>
    </li>
  )
}

export default memo(ListItem)