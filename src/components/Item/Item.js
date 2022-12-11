import { Link } from "react-router-dom";
const Item = ({ producto }) => {
  return (
    <div>
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.category}</p>
      <p>{producto.stock}</p>
      <Link to={`/detail/ ${producto.id}`}>Ver Detalle</Link>
      {/*  */}
    </div>
  );
};
export default Item;
