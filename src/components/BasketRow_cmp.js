import React, { useState } from "react";
import Cart from "../assets/cart.png";

const BasketRow_cmp = (props) => {
  const [editable, setEditable] = useState(false);

  const [qty, setQty] = useState(props.qty);

  const editButtonOnClick = () => {
    if (editable) {
      setEditable(false);
      props.saveEditBtn(qty);
    } else {
      setEditable(true);
    }
  };

  return (
    <div className="row align-items-center">
      <div className="col-1">
        <img
          src={props.image}
          width={80}
          className="img-fluid shadow-sm "
          alt="Shop"
        />
      </div>
      <div className="col-4">
        <p className="card-subtitle mb-2 ">Name</p>
        <h6 className="card-title">{props.name}</h6>
      </div>
      <div className="col-1 text-center">
        <p className="card-subtitle mb-2 text-muted">Qty</p>
        <select
          value={qty}
          style={{ textAlign: "center" }}
          readOnly={!editable}
          class="form-control form-control-sm mb-2"
          aria-label="Default select example"
          onChange={(e) => setQty(e.target.value)}
        >
          {!editable ? (
            <option selected value={qty}>
              {qty}
            </option>
          ) : (
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <option selected={item == qty} disabled={!editable} value={item}>
                {item}
              </option>
            ))
          )}
        </select>
      </div>

      <div className="col-2">
        <p className="card-subtitle mb-2 text-muted">Unit Price</p>
        <h6 className="card-title">Rs. {props.uPrice}</h6>
      </div>
      <div className="col-2">
        <p className="card-subtitle mb-2 text-muted">Amount</p>
        <h6 className="card-title">
          Rs. {parseFloat(props.uPrice) * parseFloat(props.qty)}
        </h6>
      </div>
      <div className="col-1">
        <i
          onClick={editButtonOnClick}
          style={{ color: "green", fontSize: 24 }}
          className={editable ? "far fa-check-circle btn" : "fas fa-edit btn"}
        ></i>
      </div>
      <div className="col-1">
        <i
          onClick={props.deleteBtnOnClick}
          style={{ color: "red", fontSize: 24 }}
          className="fas fa-trash-alt btn"
        ></i>
      </div>
      <hr></hr>
    </div>
  );
};

export default BasketRow_cmp;
