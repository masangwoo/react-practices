import React from 'react'
import styles from './assets/css/TaskList.css';
import Task from './Task';

const TaskList = ({no, tasks, addTask, deleteTask}) => {
  return (
    <div className={styles.TaskList}>
          <ul>     
            {tasks.map((task)=><Task 
                                   key={task.no}
                                   no={task.no}
                                   name={task.name} 
                                   done={task.done}
                                   deleteTask={deleteTask}
                                   cardNo={task.cardNo}/>)}
            <input 
              type='text' 
              className={styles.TaskList__add_task}
              placeholder={'태스크 추가'}
              onKeyPress={e=>{
                if(e.key === 'Enter'){
                  console.log(`call notifyAddTask(${e.target.value})`);
                  const newTask = { 
                    name : e.target.value ,
                    done : 'N', 
                    cardNo : no };
                  
                  e.target.value = '';

                  addTask(newTask);

                }
              }}
            />
          </ul>
     </div>
  )
}

export default TaskList