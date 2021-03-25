/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/alt-text */
//import './home.css'
import React from "react";
import Scrolling from "./carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Home extends React.Component {
  render() {
    return (<React.Fragment>
      <div className="container">
        <div className="jumbotron text-center" id="box">
          <h1 id="header">Welcome to Computer Shopee</h1>
          <p>Build your own dream PC with us</p>
         
        </div>
        <div style={{marginBottom:"2rem"}}>
        <Scrolling />
        </div>
      </div>
     
     </React.Fragment>
    );
  }
}

export default Home;
