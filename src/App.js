import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CollapsNav from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CollapsNav />
        <div>
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
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
