import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopItem from "./pages/ShopItem";
import Cart from "./pages/Cart";
import bookData from "./utils/books.json";
import uniqid from "uniqid";
import {useEffect, useState} from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [displayStore, setDisplayStore] = useState('grid');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setBooks(bookData.map((book) => {
      return {...book, id: uniqid()}
    }));
  }, []);
  
  function uploadDisplayStore() {
    setDisplayStore(displayStore === "grid" ? "none": "grid");
  }

  function addItemToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop books={books} display={displayStore} fn={addItemToCart}/>}>
            <Route path=":itemId" element={
              <ShopItem books={books} displayStore={uploadDisplayStore}/>
            }></Route>
          </Route>
          <Route path="/cart" element={<Cart items={cartItems}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
