import { useState } from "react";

const ButtonState = () => {
  //let count = 0;

  const [count, setCount] = useState(0);
  //   const stateNumber = arrayState[0];
  //   const stateFunction = arrayState[1];

  const handleClickButton = () => {
    console.log("Handle click: " + (count + 1));
    setCount(count + 1);
  };

  return <button onClick={handleClickButton}>buttonState : {count}</button>;
};
export default ButtonState;
