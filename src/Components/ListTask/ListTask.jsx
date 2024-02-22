import Task from '../Task/Task';

const ListTask = ({ arrTask, handleDeleteTask }) => {
  return (
    <div>
      {arrTask.map((task, index) => {
        return <Task deleteTask={handleDeleteTask} task={task} key={index} />;
      })}
    </div>
  );
};

export default ListTask;
