import Task from '../Task/Task';

const ListTask = ({ arrTask, handleDeleteTask, checkTaskDone }) => {
  return (
    <div>
      {arrTask.map((task, index) => {
        return (
          <Task
            deleteTask={handleDeleteTask}
            checkTaskDone={checkTaskDone}
            task={task}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ListTask;
