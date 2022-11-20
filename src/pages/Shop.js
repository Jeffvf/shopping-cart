import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Shop({books, display}) {
  return(
    <div>
      <Navbar />
      <div className="store" style={display= {display}}>
        {books.map((book) => {
          return (
            <Link key={book.id} to={book.id.toString()}>
              <Card book={book} />
            </Link>
          )
        })}
      </div>
      <Outlet />
    </div>
  )
}

export default Shop;