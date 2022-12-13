import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CollapsNav from "./components/Navbar/Navbar";
import { useEffect,useState } from "react";
import { ClipLoader } from "react-spinners";

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
     
      <BrowserRouter>
        <CollapsNav />
        <div>
           {
        loading?
        <ClipLoader color={'#D0021B'} loading={loading} size={100} />
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
          </Routes>
      }
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
