import React from 'react';
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


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productsInCart: [],
      selectedId: null
    }
  }
  setSelectedId = (id) => {
    this.setState({ selectedId: id });
  }
  addProductToCart = (product) => {
    this.setState({
      productsInCart: [...this.state.productsInCart, product]

    })
  }
  removeProductFromCart = (id) => {
    
    let productsInCartCopy= this.state.productsInCart;
    const idx = productsInCartCopy.findIndex(({productId}) => productId === id)
    if(idx>=0){
    productsInCartCopy.splice(idx, 1)
    }
    this.setState({
      productsInCart: productsInCartCopy
    })
  }

  render() {
    console.log(this.state.productsInCart);
    return (
      <>
        <BrowserRouter>
          <Navbar cartCount={this.state.productsInCart.length} />
          <Switch>

            <Route exact path="/"><Home setSelectedId={this.setSelectedId} /></Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route path="/artworkDetail"><ArtworkDetail selectedId={this.state.selectedId} addProductToCart={this.addProductToCart} removeProductFromCart={this.removeProductFromCart} /></Route>
            <Route path="/cart"  ><Cart productsInCart={this.state.productsInCart} addProductToCart={this.addProductToCart} removeProductFromCart={this.removeProductFromCart} /></Route>
            <Route path = "/checkout" component={Checkout}/>

            <Redirect to="/" />

          </Switch>
        </BrowserRouter>
      </>

    );
  }
}

export default App;



