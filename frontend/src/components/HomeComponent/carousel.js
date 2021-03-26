/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img from "./images/Home 1.jpg";

class Scrolling extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showStatus={false}
        >
          <div>
            <img
              src="https://cdn.vox-cdn.com/thumbor/O0zcrcICWlIa0o7j56RjYpvdyok=/0x0:3470x2193/1200x800/filters:focal(1458x820:2012x1374)/cdn.vox-cdn.com/uploads/chorus_image/image/63658010/Intel_9th_Gen_Core_8.0.jpg"
              height="600px"
            />
          </div>
          <div>
            <img
              src="https://www.cgdirector.com/wp-content/uploads/media/2018/09/GraphicsCardsPerformance-Twitter_1200x675-1200x675.jpg"
              height="600px"
            />
          </div>
          <div>
            <img
              src="https://gamesncomps.com/wp-content/uploads/2020/10/high-gaming-pc.jpg"
              height="600px"
            />
          </div>
        </Carousel>
        
        <div style={{ marginTop: "8rem" }}>
          <div style={{margin:"auto",display:"block",textAlign:"center",marginBottom:"2rem",fontSize:"2rem"}}>Our Partners</div>
          
          <div className="row">
          <div className="col"></div>
          <div className="col-sm-12 col-md-8">
           
           
              <div className="row">
                <div className="col-md-3">
              <div>
                <img
                  src="https://cdn.vox-cdn.com/thumbor/O0zcrcICWlIa0o7j56RjYpvdyok=/0x0:3470x2193/1200x800/filters:focal(1458x820:2012x1374)/cdn.vox-cdn.com/uploads/chorus_image/image/63658010/Intel_9th_Gen_Core_8.0.jpg"
                  height="100px"
                />
                </div>
              </div>
              <div className="col-md-3">
              <div>
                <img
                  src="https://www.cgdirector.com/wp-content/uploads/media/2018/09/GraphicsCardsPerformance-Twitter_1200x675-1200x675.jpg"
                  height="100px"
                />
              </div>
              </div>
              <div className="col-md-3">
              <div>
                <img
                  src="https://gamesncomps.com/wp-content/uploads/2020/10/high-gaming-pc.jpg"
                  height="100px"
                />
              </div>
              </div>
              <div className="col-md-3">
              <div>
                <img
                  src="https://gamesncomps.com/wp-content/uploads/2020/10/high-gaming-pc.jpg"
                  height="100px"
                />
              </div>
              </div>
              </div>
            
            
          </div>
       
        
        <div className="col"></div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Scrolling;
