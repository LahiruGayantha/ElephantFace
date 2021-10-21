import React, { useEffect, useState } from "react";
import Navigation_cmp from "../components/Navigation_cmp";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import Confirmation_modal_cmp from "../components/Confirmation_modal_cmp";
import { useSelector } from "react-redux";

const Item_page = (props) => {
  const history = useHistory();
  const userId = useSelector((state) => state.user.id);
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/item/find/" + id).then((result) => {
      setData({ ...result.data, qty: 1, amount: result.data.unitPrice });
    });
  }, []);

  const confirmationHandler = () => {
    axios
      .post("/cart/addItem", {
        itemId: parseInt(id),
        itemQty: data.qty,
        userId: userId,
      })
      .then((result) => {
        console.log(result.data);
        history.push("/basket");
      })
      .catch((e) => console.log(e));
  };

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
            <div className="row">
              <div className="col-4">
                <h6 class="card-subtitle mb-2 text-muted">Unit Price</h6>
                <h5 class="card-title">Rs. {data.unitPrice}</h5>
                <br></br>
                <h6 class="card-subtitle mb-2 text-muted">Qty</h6>
                <div className="col-5 text-center">
                  <select
                    value={data.qty}
                    onChange={(e) =>
                      setData((cur) => ({
                        ...cur,
                        qty: e.target.value,
                        amount:
                          parseFloat(cur.unitPrice) *
                          parseFloat(e.target.value),
                      }))
                    }
                    class="form-control form-control-sm"
                    aria-label="Default select example"
                  >
                    <option selected>1</option>
                    {[2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div
                className="col-8"
                style={{
                  borderLeftStyle: "groove",
                  borderLeftColor: "GrayText",
                  borderLeftWidth: 1,
                  paddingLeft: 50,
                }}
              >
                <h6 class="card-subtitle mb-2 text-muted">Total Amount</h6>
                <h3 class="card-title">Rs. {data.amount}</h3>
                <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#confirmation_modal_cmp"
                >
                  Add to cart
                </button>
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
      <Confirmation_modal_cmp
        mainBtnText="Continue"
        id="confirmation_modal_cmp"
        type="Confirmation"
        message="Are you sure?"
        onClickBtn2={() => confirmationHandler()}
      />
    </div>
  );
};

export default Item_page;
