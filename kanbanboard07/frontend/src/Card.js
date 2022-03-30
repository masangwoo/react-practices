import React, {useState, useEffect} from 'react'
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

const Card = ({no, title, description}) => {
  const [tasks, setTasks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(async () => {
    try {  
      const response = await fetch(`/api/card/${no}`, {
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      setTasks(json.data);
    } catch(err) {
      console.log(err);      
    }  
  }, [showDetails]);
  
  const notifyAddTask = async function(task) {

    try {  
      const response = await fetch(`/api/card`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(task)
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      
      setTasks([json.data, ...tasks]);
    } catch(err) {
      console.log(err);      
    }     
  }

  const notifyDeleteTask = async function(taskno) {
    try {  
      const response = await fetch(`/api/card/${taskno}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      
      setTasks(tasks.filter(t => t.no !== taskno));
    } catch(err) {
      console.log(err);      
    }     
  }

  return (
    <div className={styles.Card}>
        <div
          className={showDetails ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title}
          onClick={() => {
            console.log(`fecth task(/api/task?cardNo=${no}...)`);
            
            setShowDetails(!showDetails);
          }}>
          {title}
        </div>
        {
          showDetails ? 
            <div className={styles.Card__Details}>
              {description}
              <TaskList no={no} tasks={tasks} addTask={notifyAddTask} deleteTask={notifyDeleteTask} />            
              </div> 
              :
            null
        }
    </div>
  )
}

export default Card;