import React from 'react';
import{NavLink,Link} from 'react-router-dom';
import CartIcon from './svg/cart.svg'


const Navbar =(props)=>{
  const cartCount = props;
  console.log("productsInCartlength",cartCount)
return(
    <>
  <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
  <NavLink className="navbar-brand" to="/">Artwork Gallery</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item " >
          <NavLink activeClassName = "menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink activeClassName="menu_active" className="nav-link text-white" aria-current="page" to="/artworkdetail">ArtworkDetails</NavLink>
        </li>   
      </ul>
      <Link to="/login">
      <button className="btn btn-outline-warning my-2 my-sm-0 px-3 " type="submit">Login / Register</button>
      </Link> 
      
      <div className="nav-cart px-3 ">
                    <span>0</span>
                    <Link to="/cart">
                        <img src={CartIcon} alt="" width="20"></img>
                    </Link>
                </div>     
                
                 </div>
  </nav>
    </>
);
}
export default Navbar;