import React, { Component } from "react";
import "./HomeComponent.css"
class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="body1">
          <div class="sectionLight">
            <div class="row">
              <div class="col-sm-12">
                <div class="jumbotron jumbotron-fluid">
                  <div class="container">
                    <h1 class="display-3">
                      <b>Welcome To</b>
                    </h1>
                    <h3 class="lead">
                      <b>Computer Accessories Shoppe</b>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col"></div>
              <div class="col-sm-12 col-md-6">
                <div
                  id="mainCarousel"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                      <img
                        class="d-block img-fluid"
                        src="/images/photo3.jpg"
                        alt="First slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <button>
                        {" "}
                        <img
                          class="d-block img-fluid"
                          src="/images/photo6.jpg"
                          alt="Second slide"
                        />
                      </button>
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block img-fluid"
                        src="images/photo5.jpg"
                        alt="Third slide"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#mainCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#mainCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div class="col"></div>
            </div>
          </div>

          <div class="sectionLight">
            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-12 col-md-4">
                    <a href="#">
                      <img
                        class="img-Fluid imgCenter"
                        src="images/e1.jpg"
                        width="300"
                        height="300"
                      />
                    </a>
                    <div class="row">
                      <div class="col-sm-12">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btnCenter"
                        >
                          {" "}
                          <b> Add To Cart </b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4">
                    <img
                      class="img-Fluid imgCenter"
                      src="images/e2.jpg"
                      width="300"
                      height="300"
                    />
                    <div class="row">
                      <div class="col-sm-12">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btnCenter"
                        >
                          {" "}
                          <b> Add To Cart </b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4">
                    <img
                      class="img-Fluid imgCenter"
                      src="images/e3.jpg"
                      width="300"
                      height="300"
                    />
                    <div class="row">
                      <div class="col-sm-12">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btnCenter"
                        >
                          {" "}
                          <b> Add To Cart </b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="coolStuffModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="coolStuffLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Get Exclusive Content
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm-12">
                        <img class="img-fluid" src="images/cricket-logo.jpg" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="modelFormWrapper">
                          <form>
                            <div class="form-group">
                              <label for="formGroupExampleInput">
                                <b>What Is Your Name?</b>
                              </label>
                              <input
                                type="text"
                                class="form-control hover1"
                                id="formGroupExampleInput"
                                placeholder="Name"
                              />
                            </div>
                            <div class="form-group">
                              <label for="formGroupExampleInput2">
                                <b>What Is Your Email-Id?</b>
                              </label>
                              <input
                                type="text"
                                class="form-control hover1"
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
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary close-1"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="sectionLight">
            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-12 col-md-4">
                    <img
                      class="img-Fluid imgCenter"
                      src="images/e4.jpg"
                      width="300"
                      height="300"
                    />
                    <div class="row">
                      <div class="col-sm-12">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btnCenter"
                        >
                          {" "}
                          <b> Add To Cart </b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4">
                    <img
                      class="img-Fluid imgCenter"
                      src="images/e5.jpg"
                      width="300"
                      height="300"
                    />
                    <div class="row">
                      <div class="col-sm-12">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btnCenter"
                        >
                          {" "}
                          <b> Add To Cart </b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4">
                    <img
                      class="img-Fluid imgCenter"
                      src="images/e6.jpg"
                      width="300"
                      height="300"
                    />
                    <div class="row">
                      <div class="col-sm-12">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btnCenter"
                        >
                          {" "}
                          <b> Add To Cart </b>
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
