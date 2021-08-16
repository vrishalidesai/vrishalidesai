import React from "react";
import { Link } from "react-router-dom";

const cssStyle = {
  color: "#e24e4e",
};

const Product = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-5">
          <img src={props.imgsrc} className="img-fluid" alt="product" />
        </div>

        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-blue">
          <h2>{props.title}</h2>
          <h5> Genre:{props.genre}</h5>
          <h5 className="text-blue">
            <strong>
              price: <span style={cssStyle}> ${props.price}</span>
            </strong>
          </h5>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Some info about product:
          </p>
          <p className="text-muted lead ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            quo architecto nostrum eligendi ex. Fugiat, animi. Expedita earum,
            quisquam officia doloribus aliquid modi. Obcaecati hic saepe fuga
            asperiores, repellendus expedita necessitatibus non tempore
            inventore quaerat beatae quisquam aspernatur ab, et mollitia
            aperiam, placeat sed quasi? Accusamus possimus architecto cupiditate
            magnam?
          </p>
          <div className="btn-options mt-3">
            <Link to="/cart">
              <button
                className="add-products"
                onClick={() => {
                  props.addProductToCart({
                    productId: props.id,
                    productPrice: props.price,
                    productTitle: props.title,
                  });
                }}
              >
                add to cart
              </button>
              <button
                className="remove-products"
                onClick={() => props.removeProductFromCart(props.productId)}
              >
                remove from cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
