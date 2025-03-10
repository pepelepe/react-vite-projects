const OneTask = ({ task, deleteTask, updateTask }) => {
  const { title, description, state, priority, id } = task;
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className={`${state && `text-decoration-line-through`}`}>
            {title}
          </h5>
          <p className={`${state && `text-decoration-line-through`}`}>
            {description}
          </p>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTask(id)}
            >
              Delete
            </button>
            <button
              className="btn btn-sm btn-warning"
              onClick={() => updateTask(id)}
            >
              Update
            </button>
          </div>
        </div>
        <span className="badge text-bg-primary">{priority && "Priority"}</span>
      </div>
    </li>
  );
};
export default OneTask;
