import "./App.css";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CollapsNav from "./components/Navbar/Navbar";
import { useEffect,useState } from "react";
import { ClipLoader } from "react-spinners";
import Cart from "./components/Cart/Cart";

function App() {
  const[loading, setLoading]=useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },4000)
    },[])
  return (
    <div className="App">
     <CartProvider>

      <BrowserRouter>
        <CollapsNav />
        <div>
           {
        loading?
        <ClipLoader color={'#1F1A1B'} loading={loading} size={100} />
       : 
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer /> }
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
          </Routes>
      }
        </div>
      </BrowserRouter>
     </CartProvider>
    </div>
  );
}

export default App;
