import './../../App.css';
import {Link} from "react-router-dom"

const Navbar = (props) => {

  return (
    <section className="Navbar">
    <div className="container">

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="shop" className="nav-link" href="#">Shop</Link>
          </li>
          <li className="nav-item">
            <Link to="counter" className="nav-link" >Counter</Link>
          </li>

          
        </ul>
        
      </div>
    </div>
  </nav>


    
    </div>
    </section>
  );
}

export default Navbar;
