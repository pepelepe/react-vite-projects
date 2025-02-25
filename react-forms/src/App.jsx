import UncontrolledForms from "./components/UncontrolledForms";
import ControlledForms from "./components/ControlledForms";

const App = () => {
  return (
    <div className="container pt-4 pb-4">
      <h1>Uncontrolled FORM</h1>
      <UncontrolledForms />
      <hr />
      <h1>Controlled FORM</h1>
      <ControlledForms />
    </div>
  );
};
export default App;
