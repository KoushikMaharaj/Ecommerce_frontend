import React, { Component } from "react";
import "./ContactUs.css";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {" "}
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-12 col-md-6" id="column1">
            <h1 className="center">Contact Us</h1>
            <p className="center1">
              <b>
                Feel free to contact us using below details we will get back to
                you as soon as possible
              </b>
            </p>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-12 col-md-6" id="column">
            <h2 className="center4">
              <i className="fa fa-map-marker" aria-hidden="true" id="fav"></i>
              Address
            </h2>
            <p className="center3">- Rajarampuri 5th Lane, in front of Naturals ice-cream</p>
            <h2 className="center2">
              <i className="fa fa-envelope-o" aria-hidden="true" id="fav"></i>Email
            </h2>
            <p className="center3">- computershopee52@gmail.com</p>
            <h2 className="center2">
              <i className="fa fa-phone-square" aria-hidden="true" id="fav"></i>
              Phone
            </h2>
            <p className="center3">- 7030261818</p>
          </div>
          <div className="col"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactUs;
