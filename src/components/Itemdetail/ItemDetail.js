import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id,img,description,price,stock,name }) => {
  const handleOnAdd = (quantity) => {
    console.log("se agrego al carrito" + quantity);
  };

  return (
    <div>
      <h1>{name}</h1>
        <img src={img} alt={name} />
        <p>{description}</p>
        <h2>${price}</h2>
      {stock > 0 && <ItemCount stock={stock} onAdd={handleOnAdd} />}
    </div>
  );
};
export default ItemDetail;
