import Navbar from "../components/Navbar";

function Cart({items}){
  const quantity = {} 
  
  items.forEach(item => {
    quantity[item.id] = (quantity[item.id] || 0) + 1; 
  })

  const totalPrice = items.reduce((previous, next) => previous + parseFloat(next.price), 0)
  const cartItems = [...new Set(items)];

  const totalItems = cartItems.map((item) => {
    return(
      <div key={item.id}>
        <h3>{item.title} x {quantity[item.id]}</h3>
        <p>R$ {item.price * quantity[item.id]}</p>
      </div>
    )
  })

  return(
    <div>
      <Navbar />
      <div id="cart">
        <div className="cart-items">
          {totalItems}
          <b className="total-price">Total: R$ {totalPrice.toFixed(2)}</b>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;