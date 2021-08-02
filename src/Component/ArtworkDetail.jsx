import React from "react";
import Data, { getData, getFilterData } from "../data";
import Product from "./Product";

export default class ArtWorkDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }
  componentDidMount() {
    const ID = this.props.selectedId;
    //    getFilterData(ID);

    getFilterData(ID).then((result) => {
      this.setState({ photos: result });
    });
  }
  componentWillUnmount() {
    this.setState({ photos: [] });
  }
  render() {
    // console.log(this.state.photos);
    return !this.state.photos.length ? (
      "Loading"
    ) : (
      <div className="container py-3">
        {this.state.photos.map((items) => {
          console.log("ID:" + items.id);
          return (
            <Product
              id={items.id}
              imgsrc={items.imageUrl}
              title={items.title}
              genre={items.genre}
              price={items.price}
              addProductToCart={this.props.addProductToCart}
              removeProductFromCart={this.props.removeProductFromCart}
            />
          );
        })}
      </div>
    );
  }
}
