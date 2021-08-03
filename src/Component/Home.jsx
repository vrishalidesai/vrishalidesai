import React,{useState,useEffect} from "react";
import Data, { getData } from "../data";
import Card from "./Card";

const Home =(props)=> {
  const [photos,setPhotos]= useState([]);
  const [productsInCart,setProductsInCart]=useState([])
 
  useEffect(()=>{
    getData().then((result) => {
      setPhotos(result );
    });
    return()=>{
      setPhotos([] );
    }
  },[])

  
 
    console.log(photos);
    return !photos.length ? (
      "Loading"
    ) : (
      <>
        <div className="my-5">
          <h1 className="text-center">Artwork Gallery</h1>
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row mb-4">
                  {photos.map((items) => {
                    console.log("ID:" + items.id);
                    return (
                      <Card
                        id={items.id}
                        imgsrc={items.imageUrl}
                        title={items.title}
                        price={items.price}
                        setSelectedId={props.setSelectedId}
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
  }

export default Home;
