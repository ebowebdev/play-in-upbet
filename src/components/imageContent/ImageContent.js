import React, { memo } from 'react'
import styles from './imageContent.module.css'

function ImageContent() {
  return (
    <div className={styles.container}>
      <img className={styles.monoImg} src="images/monopolyMan.jpg" alt="wellcome" />
    </div>
  )
}

export default memo(ImageContent)