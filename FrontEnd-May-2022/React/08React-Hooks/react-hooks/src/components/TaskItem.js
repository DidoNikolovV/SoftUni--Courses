import { TaskContext } from '../contexts/TaskContext';
import { useEffect, useContext } from 'react';
import styles from './TaskItem.module.css';

const TaskItem = ({ task }) => {
  const { taskDeleteHandler, toggleTask } = useContext(TaskContext);

  useEffect(() => {
    // console.log('Mount');

    return () => {
      // console.log('Unmount');
    };
  }, []);

  const classNames = [
    task.isCompleted ? styles.completed : '',
    styles['task-item'],
  ];

  return (
    <li>
      <span
        className={classNames.join(' ')}
        onClick={() => toggleTask(task._id)}
      >
        {task.title}
      </span>
      <button onClick={() => taskDeleteHandler(task._id)}>X</button>
    </li>
  );
};

export default TaskItem;
