import { useEffect } from "react";
import { useParams } from "react-router-dom"

function ShopItem({books, displayStore}) {
  let {itemId} = useParams();
  let book = books.filter((book) => book.id === itemId)[0];
  let image = require(`../assets/images/${book.cover}.jpg`);

  useEffect(() => {
    displayStore()
  }, [])

  useEffect(() => {
    return(() => displayStore())
  })

  return(
    <div className="item-info">
      <img src={image} alt={book.title} width="450px" height="700px"></img>
      <div>
        <h1>{book.title}</h1>
        <h2>by {book.author}</h2>
        <h2>Page count: {book.pageCount}</h2>
        <h3 className="price">R$ {book.price}</h3>
      </div>
    </div>
  )
}

export default ShopItem;