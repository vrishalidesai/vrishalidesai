import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";
import "./CSS/Cart.css";
import axios from 'axios';
export default function Cart(props) {
  console.log(props);
  const {  uniques, addProductToCart,productsInCart,removeProductFromCart } =
    useContext(GlobalContext);
   
  return (
    <div
      style={{
        width: 600,
        height: 400,
        padding: "10px",
        margin: "20px auto",
        borderRadius: "30px",
      }}
    >
      <h2>Cart Items</h2>
      <div>
        {productsInCart.length === 0 && (
          <div style={{ color: "green", fontWeight: "bold" }}>
            Cart Is Empty !!!
          </div>
        )}
      </div>

      {uniques.map((item) => {
        console.log("items:", item);
        return (
          <div key={item.productId} className="row">
            <img src={item.productImage}/>
            <div style={{ paddingLeft: "20px" }}>{item.productTitle}</div>
            <div className="product">{item.productPrice}</div>
            <div>
              <button
                onClick={() => {
                  addProductToCart({
                    productId: item.productId,
                    productImage:item.productImage,
                    productTitle: item.productTitle,
                    productPrice: item.productPrice,
                    productQuantity:item.qty

                  });
                }}
                className="add"
              >
                +
              </button>
              <button
                onClick={
                  () =>{
                
                    removeProductFromCart(item.productId)}}
                className="remove"
              >
                -
              </button>
            </div>
            <div className="col-2 text-right">
              {parseInt(item.qty)}X {parseFloat(item.productPrice).toFixed(2)}=
              {parseInt(item.qty) * parseFloat(item.productPrice).toFixed(2)}
            </div>
          </div>
        );
      })}
      {productsInCart.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">${props.totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          <div className="row">
            <Link to="/checkout">
              <button className="btn btn-primary text-center">Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
