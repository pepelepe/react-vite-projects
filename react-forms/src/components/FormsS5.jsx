import Swal from "sweetalert2";
import { useState } from "react";

const FormsS5 = ({ addTask }) => {
  const [error, setError] = useState("");

  const [task, setTask] = useState({
    title: "Todo #01",
    description: "Description #01",
    state: "pending",
    priority: true,
  });

  const { title, description, state, priority } = task;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Error validation with sweetalert2
    if (!title.trim() || !description.trim())
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Title and description are mandatories!",
      });

    addTask({
      id: Date.now(),
      ...task,
      state: state === "completed",
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Task added successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleChange = (e) => {
    const { name, checked, value, type } = e.target; // Destructuration
    setTask({
      ...task,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input all"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Input description"
        name="description"
        value={description}
        onChange={handleChange}
      ></textarea>
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Give priority</label>
      </div>

      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pending"> Pending </option>
        <option value="completed"> Completed </option>
      </select>
      <button type="submit" className="btn btn-primary">
        Add task
      </button>
    </form>
  );
};
export default FormsS5;
