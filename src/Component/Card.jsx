import React from "react";

import { withRouter } from "react-router-dom";
const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card mb-4 mx-2">
          <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <h5>${props.price}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              onClick={() => {
                props.setSelectedId(props.id);
                props.history.push("/artworkdetail");
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
export default withRouter(Card);
