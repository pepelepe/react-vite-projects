import ItemFrut from "./ItemFrut";

const ListFrut = ({ list }) => {
  return (
    <ul className="listStyle">
      <li>{list[0]}</li>
      {list.map((frut, index) => (
        <ItemFrut key={index} prod={frut}></ItemFrut>
      ))}
    </ul>
  );
};
export default ListFrut;
