import { useState } from "react";

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
    <div>
      <p>{count}</p>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={() => onAdd(count)} disabled={count===0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
