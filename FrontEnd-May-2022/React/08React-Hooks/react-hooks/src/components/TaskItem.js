import { TaskContext } from '../contexts/TaskContext';
import { useEffect, useContext, useState } from 'react';
import styles from './TaskItem.module.css';

const TaskItem = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { taskDeleteHandler, toggleTask, taskEditHandler } =
    useContext(TaskContext);

  useEffect(() => {
    // console.log('Mount');

    return () => {
      // console.log('Unmount');
    };
  }, []);

  const taskEditClickHandler = () => {
    setIsEdit(true);
  };

  const onEdit = (e) => {
    e.preventDefault();
    const { title } = Object.fromEntries(new FormData(e.target));

    taskEditHandler(task, title);
    setIsEdit(false);
  };

  const classNames = [
    task.isCompleted ? styles.completed : '',
    styles['task-item'],
  ];

  return (
    <li>
      {isEdit ? (
        <form onSubmit={onEdit}>
          <input type="text" name="title" defaultValue={task.title}></input>
          <input type="submit" value="edit"></input>
        </form>
      ) : (
        <>
          <span
            className={classNames.join(' ')}
            onClick={() => toggleTask(task)}
          >
            {task.title}
          </span>
          <button onClick={() => taskDeleteHandler(task._id)}>X</button>
          <button onClick={() => taskEditClickHandler(task._id)}>edit</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
