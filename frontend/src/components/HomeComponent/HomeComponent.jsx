import React, { Component } from "react";
import "./HomeComponent.css";
// import photo3 from "./images/photo3.jpg";
// import photo4 from "./images/photo4.jpg";
// import photo5 from "./images/photo5.jpg";
class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="body1">
          <div className="sectionLight">
            <div className="row">
              <div className="col-sm-12">
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-3">
                      <b>Welcome To</b>
                    </h1>
                    <h3 className="lead">
                      <b>Computer Accessories Shoppe</b>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col-sm-12 col-md-6">
                <div
                  id="mainCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img className="d-block img-fluid" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <button>
                        {" "}
                        <img className="d-block img-fluid" alt="Second slide" />
                      </button>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" alt="Third slide" />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#mainCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#mainCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>

          <div className="sectionLight">
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <a href="$">
                      <img
                        className="img-Fluid imgCenter"
                        src="images/e1.jpg"
                        width="300"
                        height="300"
                        alt=""
                      />
                    </a>
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          type="button"
                          className="btn btn-primary btn-md btnCenter"
                          id="btnCenter1"
                        >
                          {" "}
                          <b> View Details</b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <img
                      className="img-Fluid imgCenter"
                      src=""
                      width="300"
                      height="300"
                      alt=""
                    />
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          type="button"
                          className="btn btn-primary btn-md btnCenter"
                          id="btnCenter1"
                        >
                          {" "}
                          <b> View Details </b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <img
                      className="img-Fluid imgCenter"
                      src=""
                      width="300"
                      height="300"
                      alt=""
                    />
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          type="button"
                          className="btn btn-primary btn-md btnCenter"
                          id="btnCenter1"
                        >
                          {" "}
                          <a href="/prdouct/details">
                            <b> View Details </b>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className="modal fade"
            id="coolStuffModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="coolStuffLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Get Exclusive Content
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-12">
                        <img
                          className="img-fluid"
                          src=""
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="modelFormWrapper">
                          <form>
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput">
                                <b>What Is Your Name?</b>
                              </label>
                              <input
                                type="text"
                                className="form-control hover1"
                                id="formGroupExampleInput"
                                placeholder="Name"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="formGroupExampleInput2">
                                <b>What Is Your Email-Id?</b>
                              </label>
                              <input
                                type="text"
                                className="form-control hover1"
                                id="formGroupExampleInput2"
                                placeholder="Email"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary close-1"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          <div className="sectionLight">
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <img
                      className="img-Fluid imgCenter"
                      src="images/e4.jpg"
                      width="300"
                      height="300"
                      alt=""
                    />
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          type="button"
                          className="btn btn-primary btn-md btnCenter"
                          id="btnCenter1"
                        >
                          {" "}
                          <b> View Details </b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <img
                      className="img-Fluid imgCenter"
                      src="images/e5.jpg"
                      width="300"
                      height="300"
                      alt=""
                    />
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          type="button"
                          className="btn btn-primary btn-md btnCenter"
                          id="btnCenter1"
                        >
                          {" "}
                          <b> View Details </b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <img
                      className="img-Fluid imgCenter"
                      src="images/e6.jpg"
                      width="300"
                      height="300"
                      alt=""
                    />
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          type="button"
                          className="btn btn-primary btn-md btnCenter"
                          id="btnCenter1"
                        >
                          {" "}
                          <b> View Details </b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
