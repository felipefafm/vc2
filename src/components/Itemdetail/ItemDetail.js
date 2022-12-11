import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productos, stock }) => {
  const handleOnAdd = (quantity) => {
    console.log("se agrego al carrito" + quantity);
  };

  return (
    <div>
      <h2>{productos.nombre}</h2>
      <h3>Detalle</h3>
      <p>{productos.descripcion}</p>
      <h3>Stock</h3>
      <p>{productos.stock}</p>
      <p>{productos.imagen}</p>
      <h3>{stock > 0 && <ItemCount stock={stock} onAdd={handleOnAdd} />}</h3>
    </div>
  );
};
export default ItemDetail;
