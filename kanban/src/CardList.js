import React from 'react'
import styles from './assets/css/CardList.css';

const CardList = ({title/**, cards 맵 사용해서 */}) => {
  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
        <Card />
        <Card />
        <Card />

    </div>
  )
}

export default CardList