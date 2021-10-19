import React, { useEffect, useState } from "react";
import Cart from "../assets/cart.png";
import Navigation_cmp from "../components/Navigation_cmp";
import { useHistory, useParams } from "react-router";
import axios from "axios";

const Item_page = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/item/find/" + id).then((result) => {
      console.log();
      setData({ ...result.data, qty: 1, amount: result.data.unitPrice });
    });
  }, []);

  return (
    <div className="container-fluid">
      <Navigation_cmp />
      <div className="container pt-5">
        <div className="row mt-5">
          <div className="offset-2 col-4">
            <img
              src={data.image}
              width={400}
              className="img-fluid shadow-sm border border-1"
              alt="..."
            />
          </div>
          <div className="col-4">
            <h2>{data.name}</h2>
            <br></br>
            <p class="card-text">{data.description}</p>
            <br></br>
            <h6 class="card-subtitle mb-2 text-muted">Unit Price</h6>
            <h5 class="card-title">Rs. {data.unitPrice}</h5>
            <br></br>
            <h6 class="card-subtitle mb-2 text-muted">Qty</h6>
            <select
              value={data.qty}
              onChange={(e) =>
                setData((cur) => ({
                  ...cur,
                  qty: e.target.value,
                  amount:
                    parseFloat(cur.unitPrice) * parseFloat(e.target.value),
                }))
              }
              class="form-select"
              aria-label="Default select example"
            >
              <option selected>1</option>
              {[2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <br></br>
            <h6 class="card-subtitle mb-2 text-muted">Amount</h6>
            <h3 class="card-title">Rs. {data.amount}</h3>
            <br />
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Checkout
            </button>
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
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item_page;
