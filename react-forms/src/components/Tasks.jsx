import OneTask from "./OneTask";

const Tasks = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div>
      <h2 className="mt-5">TO DO</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <OneTask
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
        {tasks.length === 0 && (
          <li className="list-group-item">There are no tasks</li>
        )}
      </ul>
    </div>
  );
};
export default Tasks;
