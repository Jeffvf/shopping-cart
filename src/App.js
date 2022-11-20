import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopItem from "./pages/ShopItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}>
            <Route path=":itemId" element={<ShopItem />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
