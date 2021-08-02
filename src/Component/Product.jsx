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
          <img
            src={props.imgsrc}
            className="img-fluid w-70 h-50"
            alt="product"
          />
        </div>

        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-blue">
          <h2>{props.title}</h2>
          <h4> Genre:{props.genre}</h4>
          <h5 className="text-blue">
            <strong>
              price: <span style={cssStyle}> ${props.price}</span>
            </strong>
          </h5>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Some info about product:
          </p>
          <p className="text-muted lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            officia dolor architecto dicta quidem facilis perspiciatis ex quas
            libero, quia magnam rem culpa tempora consequatur, temporibus iusto
            consequuntur neque. Impedit accusantium eveniet beatae dolorum
            aperiam quae, explicabo, sunt harum asperiores aut nulla eos at quis
            porro officiis repudiandae officia deserunt!
          </p>
          <div className="btn-options">
            {/* <Link to="/cart"><button onClick={()=>this.AddBtnClick(this.props.id)} className="add-products">add to cart</button></Link> */}

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
