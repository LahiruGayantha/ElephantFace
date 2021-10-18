import React from "react";

const Navigation_cmp = (props) => {
  return (
    <div className="mb-5">
      <h3 className="float-md-start mb-0">Cover</h3>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        <a className="nav-link active" aria-current="page" href="/">
          Home
        </a>
        <a className="nav-link" href="/shop">
          Products
        </a>
        <a className="nav-link" href="/basket">
          Cart
        </a>
      </nav>
    </div>
  );
};

export default Navigation_cmp;
