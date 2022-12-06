
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductosById } from "../../asynMock";
import ItemDetail from "../Itemdetail/ItemDetail";
const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const { productosId } = useParams();

  useEffect(() => {
    getProductosById(productosId)
      .then((response) => {
        setProductos(response);
      })
      .cath((error) => {
        console.log(error);
      });
  }, [productosId]);

  return (
    <div>
      <h1>Detalle del producto</h1>
      <ItemDetail {...productos} />
    </div>
  );
};

export default ItemDetailContainer;
