import React from "react";
import Scrolling from "./carousel";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div
            className="jumbotron text-center"
            id="box"
            style={{ marginTop: "2rem", boxShadow: "10px 10px 5px grey" }}
          >
            <h1
              id="header"
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px white, 0 0 5px darkgray",
              }}
            >
              Welcome to Computer Accessories Shopee
            </h1>
            <p>Build your own dream PC with us</p>
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <Scrolling />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
