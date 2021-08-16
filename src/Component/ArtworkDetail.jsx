import React, { useState, useEffect, useContext } from "react";
import Data, { getData, getFilterData } from "../data";
import Product from "./Product";
import { isEmptyObject } from "../utils";
import { GlobalContext } from "../App";

const ArtWorkDetail = () => {
  const { post, addProductToCart, removeProductFromCart } =
    useContext(GlobalContext);

  return isEmptyObject(post) ? (
    "Loading"
  ) : (
    <div className="container py-3">
      <Product
        id={post._id}
        imgsrc={post.imageUrl}
        title={post.title}
        genre={post.genre}
        price={post.price}
        addProductToCart={addProductToCart}
        removeProductFromCart={removeProductFromCart}
      />
    </div>
  );
};

export default ArtWorkDetail;
