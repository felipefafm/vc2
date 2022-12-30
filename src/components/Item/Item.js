import { Link } from "react-router-dom";
import "./Item.css"
const Item = ({ product }) => {
  return (
    <div className="divItemcart">
      <div className="divCont">
      <img className="ImgItem" src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <h3>$ {product.price}</h3>
      <h3>{product.description}</h3>
      <p>{product.category}</p>
      <p>{product.stock}</p>
      </div>
      <Link className="seedetail" to={`/detail/${product.id}`}>Ver Detalle</Link>
     
    </div>
  );
};
export default Item;
