import React, { useEffect } from "react";
import Cart from "../assets/cart.png";
import Navigation_cmp from "../components/Navigation_cmp";

const Item_page = (props) => {
  return (
    <div className="container-fluid">
      <div className="container mb-5">
        <Navigation_cmp />
      </div>
      <div className="container pt-5">
        <div className="row mt-5">
          <div className="offset-2 col-4">
            <img
              src={Cart}
              width={400}
              className="img-fluid shadow-sm border border-1"
              alt="..."
            />
          </div>
          <div className="col-4">
            <h2>Mens Shirt</h2>
            <br></br>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <br></br>
            <h6 class="card-subtitle mb-2 text-muted">Unit Price</h6>
            <h5 class="card-title">Rs.250.00</h5>
            <br></br>
            <h6 class="card-subtitle mb-2 text-muted">Qty</h6>
            <select class="form-select" aria-label="Default select example">
              <option selected>1</option>
              {[2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <option value="1">{item}</option>
              ))}
            </select>
            <br></br>
            <h6 class="card-subtitle mb-2 text-muted">Amount</h6>
            <h3 class="card-title">Rs.250.00</h3>
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
