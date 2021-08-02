import React from "react";
import Data, { getData } from "../data";
import Card from "./Card";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      productsInCart: [],
    };
  }
  componentDidMount() {
    getData().then((result) => {
      this.setState({ photos: result });
    });
  }

  componentWillUnmount() {
    this.setState({ photos: [] });
  }

  render() {
    console.log(this.state.photos);
    return !this.state.photos.length ? (
      "Loading"
    ) : (
      <>
        <div className="my-5">
          <h1 className="text-center">Artwork Gallery</h1>
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row mb-4">
                  {this.state.photos.map((items) => {
                    console.log("ID:" + items.id);
                    return (
                      <Card
                        id={items.id}
                        imgsrc={items.imageUrl}
                        title={items.title}
                        price={items.price}
                        setSelectedId={this.props.setSelectedId}
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
}
export default Home;
