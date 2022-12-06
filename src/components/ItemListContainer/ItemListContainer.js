import { useEffect, useState } from "react";
import { getProductos, getProductosBycategory } from "../../asynMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();
  useEffect(() => {
    if (categoryId) {
      getProductosBycategory(categoryId)
        .then((response) => {
          setProductos(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getProductos(categoryId)
        .then((response) => {
          setProductos(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoryId]);

  return (
    <div>
      <h1>Listado de productos</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
