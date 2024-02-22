const Task = ({ task, deleteTask }) => {
  const renderColorPriority = () => {
    if (task.priority === 'High') {
      return 'bg-red-600';
    } else if (task.priority === 'Medium') {
      return 'bg-yellow-600';
    } else if (task.priority === 'Low') {
      return 'bg-green-600';
    } else if (task.priority === 'Critical') {
      return 'bg-purple-600';
    }
  };
  return (
    <div className="flex my-4 items-center justify-between">
      <div>
        <h3 className="font-semibold text-2xl mb-2">{task.title}</h3>
        <div className="grid grid-cols-2 gap-3">
          <p className="text-sm">
            Priority:{' '}
            <span
              className={`${renderColorPriority()} text-white text-sm py-1 px-2 rounded`}
            >
              {task.priority}
            </span>
          </p>
          <p className="text-sm">Tag: {task.tag}</p>
          <p className="text-sm">Date add: {task.createdAt}</p>
        </div>
      </div>
      <div className="space-x-5 flex items-center">
        <button
          onClick={() => {
            deleteTask(task.key);
          }}
          className="text-red-500 text-xl"
        >
          <i className="fa-regular fa-trash"></i>
        </button>
        <button className="text-yellow-600 text-xl">
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button className="text-green-500 text-xl">
          <i className="fa-sharp fa-regular fa-circle-check"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
