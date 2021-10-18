import React from "react";
import Logo from "../assets/logo_nobackground.png";

const Navigation_cmp = (props) => {
  return (
    <div
      style={{ backgroundColor: "wheat" }}
      className="mb-5 row bg-secondary text-center align-items-center"
    >
      <div className="col-3 text-end">
        <img src={Logo} width={80} className="img-fluid" alt="..." />
      </div>
      <div className="col-3 m-4 text-start pt-2">
        <h3 style={{ color: "white" }} className="mt-1">
          Elephant Face
        </h3>
        <p style={{ color: "lightgrey" }}>Shoping on your own way</p>
      </div>
      <div className="col-3 m-4">
        <nav
          className="nav nav-masthead justify-content-left"
          style={{ color: "white", fontSize: 18 }}
        >
          <a
            style={{ color: "white" }}
            className="nav-link active"
            aria-current="page"
            href="/"
          >
            Home
          </a>
          <a style={{ color: "white" }} className="nav-link" href="/shop">
            Products
          </a>
          <a style={{ color: "white" }} className="nav-link" href="/basket">
            Cart
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navigation_cmp;
