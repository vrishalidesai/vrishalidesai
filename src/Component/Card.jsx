import React from "react";
import './CSS/Cart.css'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router-dom";



const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className="col-md-3 col-12 mx-auto">
        <div className="card mb-4 mx-2">
          <img  src={props.imgsrc} className="card-img" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
             <h5>${props.price}</h5>
           
            <p>{props.genre}</p>
            <button
              onClick={() => {
               
                
                props.getProductDetails(props.id);
                console.log("props.id",props.id);
                props.history.push("/artworkDetail");
                
              }}
              className="btn btn-primary"
            >
              Details
            </button>
              
          </div>
        </div>
      </div>
    </>
  );
};
export default  withRouter(Card);
