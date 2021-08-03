import React,{useState,useEffect} from "react";
import Data, { getData, getFilterData } from "../data";
import Product from "./Product";

const ArtWorkDetail =(props)=> {
  const [photos,setPhotos]=useState([]);
  
  useEffect(()=>{
    const ID=props.selectedId;
    getFilterData(ID).then((result) => {
      setPhotos(result );
    });
    return()=>{
setPhotos([]);
    }
  },[])
 
  
    // console.log(this.state.photos);
    return !photos.length ? (
      "Loading"
    ) : (
      <div className="container py-3">
        {photos.map((items) => {
          console.log("ID:" + items.id);
          return (
            <Product
              id={items.id}
              imgsrc={items.imageUrl}
              title={items.title}
              genre={items.genre}
              price={items.price}
              addProductToCart={props.addProductToCart}
              removeProductFromCart={props.removeProductFromCart}
            />
          );
        })}
      </div>
    );
  }

export default ArtWorkDetail