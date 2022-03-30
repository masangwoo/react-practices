import React, {useState} from 'react'
import styles from './assets/css/Task.css';
import PropTypes from 'prop-types';


const Task = ({no, name, done, deleteTask}) => {
  const [stateDone, setStateDone] = useState(done);

  return (
    <li className={styles.TaskList__Task}>
        <input
          type='checkbox'
          checked={done === 'Y'}
          onClick={e => setStateDone(!stateDone)} />
        {name}
        <a href='#' 
           className={styles.TaskList__Task__remove}
           onClick={()=>
             deleteTask(no)
            }></a>
    </li>
  );
}

Task.propType = {
  name: PropTypes.string.isRequired,
  done: PropTypes.string.isRequired
}

export default Task;