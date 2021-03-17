import React from "react";

const FooterComponent = () => {
  return (
    <footer className="footer bg-inverse " style={{ marginTop: "20rem" }}>
      hi
      <div className="container-fluid new-footer">
        <div className="row">
          <div className="col-sm-12 col-lg-2">
            <img
              className="img-fluid design"
              src="images/logo-cricket.png"
              width="220"
              height="50"
              id="img-favicons"
            />
          </div>

          <div className="col-sm-12 col-lg-10 favicons">
            <a href="https://facbook.com" target="_blank">
              <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
            </a>
            <a href="" target="_blank">
              <i
                className="fa fa-google-plus-square fa-3x"
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://instagram.com" target="_blank">
              <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
