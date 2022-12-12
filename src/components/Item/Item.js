import { Link } from "react-router-dom";
const Item = ({ product }) => {
  return (
    <div>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <h3>{product.description}</h3>
      <p>{product.category}</p>
      <p>{product.stock}</p>
      <Link to={`/detail/ ${product.id}`}>Ver Detalle</Link>
     
    </div>
  );
};
export default Item;
