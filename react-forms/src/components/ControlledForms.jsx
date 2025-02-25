import { useState } from "react";

const ControlledForms = () => {
  const [error, setError] = useState("");

  const [task, setTask] = useState({
    title: "Todo #01",
    description: "Description #01",
    state: "pending",
    priority: true,
  });

  const { title, description, state, priority } = task;
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [state, setState] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validation Data

    if (!title.trim() || !description.trim())
      return setError("Please fill in all input fields");
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
        Submit
      </button>
      <div
        style={{
          color: "red",
          fontSize: "12px",
          marginTop: "10px",
          display: error ? "block" : "none",
        }}
      >
        {error}
      </div>
    </form>
  );
};
export default ControlledForms;
