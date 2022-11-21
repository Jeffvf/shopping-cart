import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";

function Shop({books, display, fn}) {
  return(
    <div>
      <Navbar />
      <div className="store" style={display= {display}}>
        {books.map((book) => {
          return (
            <div key={book.id} className="store-item">
              <Link to={book.id.toString()}>
                <Card book={book} />
              </Link>
              <Button text="Add to cart" action={() => fn(book)}/>
            </div>
          )
        })}
      </div>
      <Outlet />
    </div>
  )
}

export default Shop;