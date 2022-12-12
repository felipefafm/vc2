import { useEffect, useState } from "react";
import { getProducts, getProductsBycategory } from "../../asynMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();
  useEffect(() => {
    if (categoryId) {
      getProductsBycategory(categoryId)
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getProducts(categoryId)
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoryId]);

  return (
    <div>
      <h1>Listado de productos</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
