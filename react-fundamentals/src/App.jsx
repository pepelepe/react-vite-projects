import imgUno from "../src/assets/images/image1.jpg";
import ProtoTypes from "prop-types";
import MyButton from "./components/MyButton";
import WelcomeText from "./components/WelcomeText";
import ListFrut from "./components/fruts/ListFrut";
import ButtonState from "./components/ButtonState";

MyButton.protoTypes = {
  text: ProtoTypes.string.isRequired,
  edad: ProtoTypes.number.isRequired,
};

const App = () => {
  const title = "Mi titutlo desde una constante";
  //const pathImg = "https://picsum.photos/200/300";
  const user = true;
  const fruits = ["🍎", "🍊", "🍌", "🍉", "🍓", "🍒", "🍍", "🥝"]; //command + control + space
  const vegetables = ["🥑", "🥦", "🌶", "🌽", "🧅", "🫑", "🍠", "🍆"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ButtonState />
      <h1 className="text-center">{title}</h1>
      <img src={imgUno} alt={`Image: ${title}`} />

      <MyButton text="Button 1" edad={10} />
      <MyButton text="Button 2" />
      <MyButton text="Button 3" />

      {/* {user ? <OnlineText /> : <OfflineText />} */}
      {/* {user && <WelcomeText user={user} />} */}
      <WelcomeText user={user} />
      <ListFrut list={fruits} />
      <ListFrut list={vegetables} />
    </div>
  );
};

export default App;
