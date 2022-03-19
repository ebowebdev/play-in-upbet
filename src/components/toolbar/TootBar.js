import React, { memo } from 'react'
import styles from './tootBar.module.css'

function TootBar() {
  return (
    <div className={styles.container}>TootBar</div>
  )
}

export default memo(TootBar)