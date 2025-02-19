const MyButton = ({ text, edad }) => {
  //   console.log(props);

  const handleClickButton = (title) => {
    console.log("handle click: " + title);
  };

  return (
    <button onClick={() => handleClickButton(text)} className="btnStyle">
      {text} - {edad}
    </button>
  );
};

export default MyButton;
