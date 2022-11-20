import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

function Home() {
  return(
    <div>
      <Navbar />
      <div className="home">
        <h1>Book Store</h1>
        <h2>Find your favorite fantasy books here!</h2>
        <Link to="Shop" className="store-link">Go to store</Link>
      </div>
    </div>
  )
}

export default Home;