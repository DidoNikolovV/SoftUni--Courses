import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const renderedTasks = tasks.map((x) => <TaskItem key={x._id} task={x} />);
  return <ul>{renderedTasks}</ul>;
};

export default TaskList;
