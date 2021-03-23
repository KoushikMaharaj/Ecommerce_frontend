import React, { Component } from "react";
import "./ContactUs.css";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {" "}
        <div className="row">
          <div class="col"></div>
          <div class="col-sm-12 col-md-6" id="column1">
            <h1 class="center">Contact Us</h1>
            <p class="center1">
              <b>
                Feel free to contact us using below details we will get back to
                you as soon as possible
              </b>
            </p>
          </div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="col-sm-12 col-md-6" id="column">
            <h2 class="center4">
              <i class="fa fa-map-marker" aria-hidden="true" id="fav"></i>
              Address
            </h2>
            <p class="center3">- BL Road Balagi Nagar,Kolhapur</p>
            <h2 class="center2">
              <i class="fa fa-envelope-o" aria-hidden="true" id="fav"></i>Email
            </h2>
            <p class="center3">- abc12@gmail.com</p>
            <h2 class="center2">
              <i class="fa fa-phone-square" aria-hidden="true" id="fav"></i>
              Phone
            </h2>
            <p class="center3">- 1234567890</p>
          </div>
          <div class="col"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactUs;
