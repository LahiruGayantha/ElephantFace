import React from "react";
import Cart from "../assets/cart.png";

const BasketRow_cmp = (props) => {
  return (
    <div className="row align-items-center">
      <div className="col-1">
        <img src={Cart} width={50} className="img-fluid shadow-sm " alt="..." />
      </div>
      <div className="col-4">
        <p className="card-subtitle mb-2 ">Name</p>
        <h6 className="card-title">Mens T-shirt</h6>
      </div>
      <div className="col-1">
        <p className="card-subtitle mb-2 text-muted">Qty</p>
        <h6 className="card-title">5</h6>
      </div>

      <div className="col-2">
        <p className="card-subtitle mb-2 text-muted">Unit Price</p>
        <h6 className="card-title">Rs.250</h6>
      </div>
      <div className="col-2">
        <p className="card-subtitle mb-2 text-muted">Amount</p>
        <h6 className="card-title">Rs.1250</h6>
      </div>
      <div className="col-1">
        <i
          style={{ color: "green", fontSize: 24 }}
          className="fas fa-edit "
        ></i>
      </div>
      <div className="col-1">
        <i
          style={{ color: "red", fontSize: 24 }}
          className="fas fa-trash-alt"
        ></i>
      </div>
      <hr></hr>
    </div>
  );
};

export default BasketRow_cmp;
