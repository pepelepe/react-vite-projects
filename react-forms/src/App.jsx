import UncontrolledForms from "./components/UncontrolledForms";
import ControlledForms from "./components/ControlledForms";
import FormsS5 from "./components/FormsS5";
import { useEffect, useState } from "react";
import Task from "./components/Tasks";

const initialStateTask = JSON.parse(localStorage.getItem("tasks")) || []; // Initialize asking if Tasks array is empty or has localStorage

const App = () => {
  const [tasks, setTasks] = useState(initialStateTask);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // useEffect save each modification of tasks on localStorage in JSON format

  // Add new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    const newArray = tasks.filter((task) => task.id !== id); // Filters and returns all IDs that are different from the "parameter ID" into a new array.
    setTasks(newArray);
  };

  // Update task
  const updateTask = (id) => {
    const newArray = tasks.map((task) => {
      // Map loops through and updates the array. It compares the "parameter ID" with the IDs in the tasks array and saves it to a new array.

      // if (task.id === id) {
      //   task.state = !task.state;
      // }
      task.id === id && (task.state = !task.state); // The conditional toggles the state between "pending" and "completed"
      return task;
    });
    setTasks(newArray);
  };

  const orderTask = (arrayTasks) => {
    return arrayTasks.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1; // if (a.priority === true) return -1;
      if (!a.priority) return 1; // if (a.priority === false) return 1;
    });
  };

  return (
    <>
      {/* <div className="container pt-4 pb-4">
        <p>****** Section 4 ******</p>
        <h1>Uncontrolled FORM</h1>
        <UncontrolledForms />
        <hr />
        <h1>Controlled FORM</h1>
        <ControlledForms />
        <hr />
      </div> */}
      <div className=" container mb-2 pt-4 pb-5">
        <p>****** Section 5 ******</p>
        <h1>Task Form</h1>
        <FormsS5 addTask={addTask} />
        <Task
          tasks={orderTask(tasks)}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </>
  );
};
export default App;
