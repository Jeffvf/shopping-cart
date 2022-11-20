function Card({book}) {
  let image = require(`../assets/images/${book.cover}.jpg`);

  return(
    <div className="card">
      <img src={image} alt={book.title} width="180px" height="280px"></img>
      <h3>{book.title}</h3>
      <span>{book.author}</span>
      <span className="price">R$ {book.price}</span>
    </div>
  )
}

export default Card;