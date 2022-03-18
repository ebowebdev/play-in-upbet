import React from 'react'
import styles from './imageContent.module.css'

function ImageContent() {
  return (
    <div className={styles.container}>
      <img className={styles.monoImg} src="images/Monopoly.jpg" alt="wellcome" />
    </div>
  )
}

export default ImageContent