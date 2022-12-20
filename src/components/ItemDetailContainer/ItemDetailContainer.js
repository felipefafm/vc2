import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getProductById } from "../../asynMock";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import ItemDetail from "../Itemdetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    const productRef = doc(db, "products", productId);
    getDoc(productRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    
  }, [productId]);
  
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div>
      <h1>Detalle del producto</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
