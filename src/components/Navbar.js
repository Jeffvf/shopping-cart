import {Link} from "react-router-dom";
import shoppingCart from "../assets/images/shopping-cart.png";

function Navbar() {
  return(
    <nav>
        <div className="nav-items-left">
          <h3>Book store</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shopping Page</Link>
        </div>
        <div className="nav-items-right">
          <Link to="/cart">
            <img src={shoppingCart} alt="shopping cart" width="36px" height="36px"></img>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar;