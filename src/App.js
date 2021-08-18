import React, { useEffect, useState } from "react";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Checkout from "./Component/Checkout";
import Navbar from "./Component/Navbar";
import ArtworkDetail from "./Component/ArtworkDetail";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";

export const GlobalContext = React.createContext();

const App = () => {

  const [productsInCart, setProductsInCart] = useState([]);
  const [post, setPost] = useState({});
  const res = productsInCart.reduce(
    (a, c) => ({ ...a, [c.productId]: (a[c.productId] || 0) + 1 }),
    {}
  );

  let uniques = [];
  for (const [key, value] of Object.entries(res)) {
    let product = productsInCart.find((val) => val.productId === key);
    console.log(product);
    uniques.push({ ...product, qty: res[key] });
  }
  const totalPrice = uniques.reduce((a, c) => a + c.productPrice * c.qty, 0);

  const getProductDetails = (id) => {
    axios
      .get(`https://artwork-gallery-app1.herokuapp.com/artworks/get/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log("ResponseData", res.data);
      })
      .catch((err) => console.log("Error", err));
  };

  const addProductToCart = (product) => {
    console.log("products", product);
    axios
      .post(
        `https://artwork-gallery-app1.herokuapp.com/orders/${product.productId}`,
        { artwork: [...uniques] }
      )
      .then((res) => {
        console.log(res.data);
      });
    setProductsInCart([...productsInCart, product]);

    console.log("Products In Cart :", productsInCart);
  };

  const removeProductFromCart = (id) => {
    let productsInCartCopy = [...productsInCart];
    const idx = productsInCartCopy.findIndex(
      ({ productId }) => productId === id
    );
    if (idx >= 0) {
      productsInCartCopy.splice(idx, 1);
    }
    setProductsInCart(productsInCartCopy);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cartCountItems={productsInCart.length} />

        <Switch>
          <GlobalContext.Provider
            value={{
              getProductDetails,
              addProductToCart,
              removeProductFromCart,
              post,
              productsInCart,
              uniques,
            }}
          >
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/artworkDetail">
              <ArtworkDetail />
            </Route>
            <Route path="/cart">
              <Cart totalPrice={totalPrice} />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </GlobalContext.Provider>
          <Route path="/checkout" component={Checkout} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
