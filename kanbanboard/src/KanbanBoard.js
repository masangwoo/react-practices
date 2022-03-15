import React from 'react';
import styles from './assets/css/KanbanBoard.css';
import CardList from './CardList';
import cards from './data.json';

export const KanbanBoard = () => {
    console.log(data);

  return (
    <div className={styles.KanbanBoard}>
        <CardList title = {'ToDo'}/>
        <CardList title = {'Doing'}/>
        <CardList title = {'Done'}/>
    </div>
  )
}

export default KanbanBoard
