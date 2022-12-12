
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asynMock";
import ItemDetail from "../Itemdetail/ItemDetail";
// import Loader from "../Loader/Loader";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  // const [Loader, setLoader] = useState (true) 



  useEffect(() => {
    getProductById(productId)
      .then((response) => {
        setProduct(response);
      })
      .cath((error) => {
        console.log(error);
      });
  }, [productId]);
// console.log(productId)
  return (
    <div>
      {/* <Loader></Loader> */}
      <h1>Detalle del producto</h1>
      <ItemDetail {...product} />
      
    </div>
  );
};

export default ItemDetailContainer;
