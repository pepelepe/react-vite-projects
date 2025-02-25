import { useRef, useState } from "react";

const UncontrolledForms = () => {
  const form = useRef(null);
  // usRef make reference to form replacing the id
  // because react use virtual DOM
  // example with id modifying DOM "const form = document.querySelector('#form')"
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent to send form data in the url via "action"
    setError("");

    // Captured Data
    const data = new FormData(form.current);
    // { title, description, state } The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
      //  ...data : Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list
    ]);

    // Validation Data

    if (!title.trim() || !description.trim())
      return setError("Please fill in all input fields");

    // Send Data
    console.log(title, description, state);
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Input all"
        className="form-control mb-2"
        name="title"
        defaultValue="TASK"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Input description"
        name="description"
        defaultValue="CLEAN BATHROOM"
      ></textarea>
      <select
        className="form-select mb-2"
        name="state"
        defaultValue="completed"
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
export default UncontrolledForms;
