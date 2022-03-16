import React from 'react';
import CardList from './CardList';
import styles from './assets/css/KanbaBoard.css';
import cards from './data.json';

const KanbaBoard = () => {
  console.log(cards);
    
  return (
    <div className={styles.KanbanBoard}>
      <CardList title={'ToDo'} cards={} />
      <CardList title={'Doing'} cards={}/>
      <CardList title={'Done'} cards={}/>
    </div>
  )
}

export default KanbaBoard