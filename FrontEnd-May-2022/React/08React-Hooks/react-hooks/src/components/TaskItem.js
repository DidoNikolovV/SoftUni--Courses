import { useEffect } from 'react';

const TaskItem = ({ title, taskDeleteHandler, taskId }) => {
  useEffect(() => {
    console.log('Mount');

    return () => {
      console.log('Unmount');
    };
  }, []);

  return (
    <li>
      {title}
      <button onClick={() => taskDeleteHandler(taskId)}>X</button>
    </li>
  );
};

export default TaskItem;
