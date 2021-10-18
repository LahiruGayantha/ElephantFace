import React from "react";
import Logo from "../assets/logo_nobackground.png";
import Cart from "../assets/cart.png";
import { useHistory } from "react-router-dom";

const Landing_page = (props) => {
  const history = useHistory();
  return (
    <div className="container-fluid bg-secondary">
      <div className="row text-left pt-5 w-100">
        <div className="col-6 text-end">
          <img src={Logo} width={400} className="img-fluid" alt="..." />
        </div>
        <div className="col-6">
          <div className="p-5 mb-4 rounded-3">
            <div className="container-fluid py-5" style={{ color: "white" }}>
              <h4 className="display-6">Shope the way you like</h4>
              <h1 className="display-4 fw-bold">Elephant Face</h1>
              <p className="col fs-4">
                Sign up to continue to your shoping jurney.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-4 bg-white">
        <div className="col-6 mt-5 text-end">
          <div className="p-5">
            <h4 className="display-6">Feel the passion</h4>
            <p className="col fs-4">
              Sign up to continue to your shoping jurney.
            </p>
          </div>
        </div>
        <div className="col-6 text-start">
          <img src={Cart} width={300} className="img-fluid" alt="..." />
        </div>
      </div>
      <footer
        className="container-fluid"
        style={{ position: "fixed", bottom: -0 }}
      >
        <div className="bg-light py-4">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              © 2021 ElephantDev All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <div className="modal fade" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sign In
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="p-4">
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="row">
                  <div className="col text-end">
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => history.push("/shop")}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_page;
