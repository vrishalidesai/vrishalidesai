import React,{useState}from 'react';
import Home from './Component/Home';
import Cart from './Component/Cart';
import Login from './Component/Login';
import Register from './Component/Register';
import Checkout from './Component/Checkout';
import Navbar from './Component/Navbar';
import ArtworkDetail from './Component/ArtworkDetail';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


const App=(props)=> {
  
const [selectedId,setId]= useState(null);
const [productsInCart,setProductsInCart]= useState([]);
    
  const setSelectedId = (id) => {
    // this.setState({ selectedId: id });
    setId(id);
  }
 const addProductToCart = (product) => {
    setProductsInCart([...productsInCart,product])
   
  }
 const removeProductFromCart = (id) => {
    
    let productsInCartCopy= productsInCart;
    const idx = productsInCartCopy.findIndex(({productId}) => productId === id)
    if(idx>=0){
    productsInCartCopy.splice(idx, 1)
    }
    setProductsInCart(productsInCartCopy)
  }

   
   
    return (
      <>
        <BrowserRouter>
          <Navbar cartCount={productsInCart.length} />
          <Switch>

            <Route exact path="/"><Home setSelectedId={setSelectedId} /></Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route path="/artworkDetail"><ArtworkDetail selectedId={selectedId} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} /></Route>
            <Route path="/cart"  ><Cart productsInCart={productsInCart} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} /></Route>
            <Route path = "/checkout" component={Checkout}/>

            <Redirect to="/" />

          </Switch>
        </BrowserRouter>
      </>

    );
  }


export default App;



