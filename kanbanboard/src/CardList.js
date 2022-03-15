import React from "react";
import CardListItems from "./CardListItems";
import styles from './assets/css/CardList.css';

const CardList = ({ cards, status }) => {
  return (
    <div className={styles.CardList}>
      <h1>{title}</h1>
      <CardListItems/>
    </div>
  );
};

export default CardList;