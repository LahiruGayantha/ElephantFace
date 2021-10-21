import React, { useRef, useState } from "react";
import Logo from "../../assets/logo_nobackground.png";
import Cart from "../../assets/cart.png";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeUser } from "../../global/userStore";
import { useRouteMatch } from "react-router-dom";

const Landing_business_page = (props) => {
  const dispatch = useDispatch();

  const { path, url } = useRouteMatch();

  const history = useHistory();

  const button = useRef(null);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const submitButtonHandler = () => {
    axios
      .post("/auth/authentication", credentials)
      .then((result) => {
        if (result.data.authSuccess) {
          if (result.data.type === "seller") {
            dispatch(changeUser({ ...result.data }));
            history.push("/seller/shop");
          } else {
            setErrors({ email: "Above user is not a seller.", password: "" });
          }
        } else {
          setErrors({ password: "Please enter correct password.", email: "" });
        }
      })
      .catch(() => setErrors({ email: "User does not exist.", password: "" }));
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#f79c4d" }}>
      <div className="row text-left pt-5 w-100">
        <div className="col-6 text-end">
          <img src={Logo} width={400} className="img-fluid" alt="..." />
        </div>
        <div className="col-6">
          <div className=" rounded-3">
            <div className="container-fluid py-5" style={{ color: "black" }}>
              <h4 className="display-6">Be a part of Us !</h4>
              <h1 className="display-4 fw-bold">Elephant Face</h1>
              <p className="col fs-4">Sign in to make your shop</p>
              <div className="col-4">
                <div className="mb-2">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={credentials.email}
                    onChange={(e) =>
                      setCredentials((cur) => ({
                        ...cur,
                        email: e.target.value,
                      }))
                    }
                  />
                  {errors.email != "" && (
                    <div
                      id="emailHelp"
                      style={{ color: "white" }}
                      className="form-text"
                    >
                      **{errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials((cur) => ({
                        ...cur,
                        password: e.target.value,
                      }))
                    }
                  />
                  {errors.password != "" && (
                    <div
                      id="emailHelp"
                      style={{ color: "white" }}
                      className="form-text"
                    >
                      **{errors.password}
                    </div>
                  )}
                </div>
                <div className="row">
                  <div className="col text-start">
                    <button
                      className="btn btn-primary"
                      onClick={() => submitButtonHandler()}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
              {/* <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Sign in
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-2 bg-white text-center offset-5"
        style={{
          borderTopRightRadius: 100,
          borderTopLeftRadius: 100,
          padding: 5,
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        <h4 style={{ color: "#f79c4d", paddingTop: 10 }}>Our Clients</h4>
      </div>
      <div className="row pt-4 bg-white justify-content-center">
        <div className="row mt-4 mb-4 text-center w-100">
          <div className="offset-3 col-2">
            <div className="card shadow-sm">
              <img
                width={"100%"}
                height={150}
                src={
                  "https://www.hsbc.lk/content/dam/hsbc/lk/images/credit-cards/offers/16-9/keels-logo-pwsimg-1400.jpg"
                }
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://www.keellssuper.com/"
                      target="_blank"
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card shadow-sm">
              <img
                width={"100%"}
                height={150}
                src="https://www.cargillsceylon.com/images/cargillslogo.png"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://cargillsonline.com/"
                      target="_blank"
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card shadow-sm">
              <img
                width={"100%"}
                height={150}
                src="https://www.isic.lk/uploads/glomark/Glowmark.jpg"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://glomark.lk/"
                      target="_blank"
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="modal-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_business_page;
