import React from "react";
import Navigation_cmp from "../components/Navigation_cmp";
import Cart from "../assets/cart.png";
import BasketRow_cmp from "../components/BasketRow_cmp";

const Basket_page = (props) => {
  return (
    <div className="container-fluid">
      <Navigation_cmp />
      <div className="container pt-4">
        <div className="row mt-5">
          <div className="col-8">
            <h2>Your Basket</h2>
            <hr></hr>
            {[1, 2, 3, 4, 5].map((item) => (
              <BasketRow_cmp />
            ))}
          </div>
          <div className="offset-1 col-3">
            <h2>Order Summary</h2>
            <hr></hr>
            <br></br>

            <h6 class="card-subtitle mb-2 text-muted">Qty</h6>
            <h5 class="card-title">5</h5>
            <br></br>
            <h6 class="card-subtitle mb-2 text-muted">Discount Amount</h6>
            <h5 class="card-title">Rs.250.00</h5>
            <br></br>
            <h6 class="card-subtitle mb-2 text-muted">Amount</h6>
            <h3 class="card-title">Rs.250.00</h3>
            {/* <br />
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Checkout
            </button> */}
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

export default Basket_page;
