import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Cart.css";
export default function Cart(props) {
  console.log(props);
  const { productsInCart, addProductToCart, removeProductFromCart } = props;

  const res = productsInCart.reduce(
    (a, c) => ({ ...a, [c.productId]: (a[c.productId] || 0) + 1 }),
    {}
  );

  let uniques = [];
  for (const [key, value] of Object.entries(res)) {
    let product = productsInCart.find((val) => val.productId === parseInt(key));
    console.log(product);
    uniques.push({ ...product, qty: res[key] });
  }
  const totalPrice = uniques.reduce((a, c) => a + c.productPrice * c.qty, 0);

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
            <div style={{ paddingLeft: "20px" }}>{item.productTitle}</div>
            <div className="product">{item.productPrice}</div>
            <div>
              <button
                onClick={() => {
                  props.addProductToCart({
                    productId: item.productId,
                    productPrice: item.productPrice,
                    productTitle: item.productTitle,
                  });
                }}
                className="add"
              >
                +
              </button>
              <button
                onClick={() => removeProductFromCart(item.productId)}
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
            <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
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
