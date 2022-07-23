import TaskItem from './TaskItem';

const TaskList = ({ tasks, taskDeleteHandler }) => {
  const renderedTasks = tasks.map((x) => (
    <TaskItem
      key={x._id}
      taskId={x._id}
      title={x.title}
      taskDeleteHandler={taskDeleteHandler}
    />
  ));
  return <ul>{renderedTasks}</ul>;
};

export default TaskList;
