import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const restar = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div className="divItemCount">
      <p>{count}</p>
      <div className="divButton">
      <button className="bs" onClick={sumar}>+</button>
      <button className="br" onClick={restar}>-</button>
      <button className="badd" onClick={() => onAdd(count)} disabled={count===0}>
        Agregar al carrito
      </button>
      </div>
    </div>
  );
};

export default ItemCount;
