import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopItem from "./pages/ShopItem";
import bookData from "./utils/books.json";
import uniqid from "uniqid";
import {useEffect, useState} from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [displayStore, setDisplayStore] = useState('grid');

  useEffect(() => {
    setBooks(bookData.map((book) => {
      return {...book, id: uniqid()}
    }));
  }, []);
  
  function uploadDisplayStore() {
    setDisplayStore(displayStore === "grid" ? "none": "grid");
  }
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop books={books} display={displayStore}/>}>
            <Route path=":itemId" element={
              <ShopItem books={books} displayStore={uploadDisplayStore}/>
            }></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
