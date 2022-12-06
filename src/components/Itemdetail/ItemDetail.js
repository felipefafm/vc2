import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, nombre, imagen, descripcion, stock }) => {
  const handleOnAdd = (quantity) => {
    console.log("se agrego al carrito" + quantity);
  };

  return (
    <div>
      <h1>{nombre}</h1>
      <image src={imagen} />
      <p>{descripcion}</p>
      { stock>0 &&<ItemCount stock={stock} onAdd={handleOnAdd} />}
    </div>
  );
};
export default ItemDetail;
