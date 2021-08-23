import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "./Card";
import { GlobalContext } from "../App";
import Pagination from "./Pagination";


const Home = () => {
  const { getProductDetails } = useContext(GlobalContext);

  
  const [posts, setPosts] = useState([]);
  const[showPerPage,setShowPerPage]=useState(4);
  const [pagination,setPagination]=useState({
    start:0,
    end:showPerPage,
  })
const onPaginationChange =(start,end)=>{
  console.log(start,end);
  setPagination({start:start,end:end})
}
 

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
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row mb-4">
                {posts.slice(pagination.start,pagination.end).map((post) => {
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
          <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={posts.length}/>
        </div>
      </div>
    </>
  );
};

export default Home;
