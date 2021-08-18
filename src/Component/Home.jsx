

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "./Card";
import { GlobalContext } from "../App";



const Home = () => {
  const { getProductDetails } = useContext(GlobalContext);

  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get(`https://artwork-gallery-app1.herokuapp.com/artworks/get`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return !posts.length ? (
    "Loading"
  ) : (
    <>
      <div className="my-5">
        {/* <h1 className="text-center">Artwork Gallery</h1> */}
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row mb-4">
                {posts.map((post) => {
                  console.log("ID:", post._id);
                  return (
                    <Card
                      key={post._id}
                      id={post._id}
                      imgsrc={post.imageUrl}
                      title={post.title}
                      price={post.price}
                      genre={post.genre}
                      getProductDetails={getProductDetails}
                    />
                    
                  
                  );
                })}
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Home;
