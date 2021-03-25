/* eslint-disable jsx-a11y/alt-text */
import React from "react";

//import './home.css'
import Slider from "infinite-react-carousel";

class Scrolling extends React.Component {
  render() {
    const settings = {
      duration: 10,
      centerMode: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <img
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/170285408/original/e58c95c45d060041f5c99f3f13e4e0893c56c5f1/pc-gamer-pc-builds.jpg"
            id="image"
          />

          <img
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/170285408/original/e58c95c45d060041f5c99f3f13e4e0893c56c5f1/pc-gamer-pc-builds.jpg"
            id="image"
          />

          <img src="/images/pc2.jpg" id="image" />
        </Slider>
      </div>
    );
  }
}

export default Scrolling;
