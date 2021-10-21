import React from "react";
import Logo from "../assets/logo_nobackground.png";
import Confirmation_modal_cmp from "./Confirmation_modal_cmp";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeUser, initialState } from "../global/userStore";

const Navigation_cmp = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logedInUser = useSelector((state) => state.user.lastName);

  return (
    <div
      className="mb-2 row text-center align-items-center shadow-sm"
      style={{ backgroundColor: "#f79c4d" }}
    >
      <div className="col-3 text-end">
        <img src={Logo} width={80} className="img-fluid" alt="..." />
      </div>
      <div className="col-3 m-4 text-start pt-2">
        <h3 style={{ color: "black" }} className="mt-1">
          Elephant Face
        </h3>
        <p style={{ color: "white" }}>Shoping on your own way</p>
      </div>
      <div className="col-3 m-2">
        <nav
          className="nav nav-masthead justify-content-left"
          style={{ color: "black", fontSize: 18 }}
        >
          <Link
            to={"/seller/shop"}
            style={{ color: "black" }}
            className="nav-link"
          >
            Products
          </Link>
          <a
            style={{ color: "black" }}
            className="nav-link active"
            aria-current="page"
            href=""
            data-bs-toggle="modal"
            data-bs-target="#signOut_modal_cmp"
            onClick={props.onClick}
          >
            Sign out
          </a>

          <p style={{ color: "black" }} className="nav-link">
            {logedInUser}
          </p>
        </nav>
      </div>
      <Confirmation_modal_cmp
        id="signOut_modal_cmp"
        mainBtnText="Sign Out"
        message="Are you sure?"
        type="Warning !"
        onClickBtn2={() => {
          dispatch(changeUser({ ...initialState }));
          history.push("/seller");
        }}
      />
    </div>
  );
};

export default Navigation_cmp;
