import React, { useRef, useState, useEffect } from "react";
import Logo from "../assets/logo_nobackground.png";
import Cart from "../assets/cart.png";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeUser } from "../global/userStore";

const Landing_page = (props) => {
  const dispatch = useDispatch();

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
          dispatch(changeUser({ ...result.data }));
          history.push("/shop");
          // window.location.reload();
        } else {
          setErrors({ password: "Please enter correct password.", email: "" });
        }
      })
      .catch(() => setErrors({ email: "User does not exist.", password: "" }));
  };

  const checkUserDetails = () => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");
    const id = localStorage.getItem("id");
    const authSuccess = localStorage.getItem("authSuccess");
    const type = localStorage.getItem("type");

    console.log(authSuccess);
    if (
      authSuccess != null &&
      authSuccess != "" &&
      authSuccess != "false" &&
      type != "seller"
    ) {
      dispatch(
        changeUser({
          firstName,
          lastName,
          email,
          id,
          authSuccess,
          type,
        })
      );
      history.push("/shop");
    }
  };

  useEffect(() => {
    checkUserDetails();
  }, []);

  return (
    <div className="container-fluid bg-secondary">
      <div className="row text-left pt-5 w-100">
        <div className="col-6 text-end">
          <img src={Logo} width={400} className="img-fluid" alt="..." />
        </div>
        <div className="col-6">
          <div className="p-2 rounded-3">
            <div className="container-fluid py-5" style={{ color: "white" }}>
              <h4 className="display-6">Shop the way you like !</h4>
              <h1 className="display-4 fw-bold">Elephant Face</h1>
              <p className="col fs-4">Sign in to shoping</p>
              <div className="col-4">
                <div className="">
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
                      style={{ color: "pink" }}
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
                      style={{ color: "pink" }}
                      className="form-text"
                    >
                      {errors.password}
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
      <div className="row pt-4 bg-white">
        <div className="col-6 mt-5 text-end">
          <div className="p-5">
            <h4 className="display-6">Are you a smart seller?</h4>
            <p className="col fs-4">
              Join with us to make your own digital shop
            </p>
            <div className="col text-end">
              <button
                className="btn btn-outline-primary"
                onClick={() => history.push("/seller")}
              >
                Join Now !
              </button>
            </div>
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
            <div className="modal-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_page;
