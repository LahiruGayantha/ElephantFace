import React, { useEffect, useState } from "react";
import Navigation_cmp from "../components/Navigation_cmp";
import BasketRow_cmp from "../components/BasketRow_cmp";
import axios from "axios";
import { useSelector } from "react-redux";

const Basket_page = (props) => {
  const userId = useSelector((state) => state.user.id);

  const [dataset, setDataset] = useState([]);

  const [summary, setSummary] = useState({
    qty: 0,
    dAmount: 0,
    amount: 0,
  });

  const loadBasket = () => {
    axios
      .get("/cart/all/" + userId)
      .then((result) => {
        setDataset(result.data);
        let qt = 0;
        let amount = 0;
        result.data.forEach((element) => {
          qt = qt + element.itemQty;
          amount =
            amount +
            parseInt(element.itemQty) * parseInt(element.item.unitPrice);
        });
        setSummary({
          qty: qt,
          dAmount: 0,
          amount: amount,
        });
      })
      .catch((e) => console.log(e));
  };

  const deleteItem = (id) => {
    axios.delete("/cart/delete/" + id).then((result) => loadBasket());
  };

  const updateItem = (id, item_id, user_id, qty) => {
    axios
      .put("/cart/update/" + id, {
        itemId: item_id,
        itemQty: qty,
        userId: user_id,
      })
      .then(() => loadBasket());
  };

  useEffect(() => {
    loadBasket();
  }, []);

  return (
    <div className="container-fluid">
      <Navigation_cmp />
      <div className="container pt-4">
        <div className="row mt-5">
          <div className="col-8">
            <h2>Your Basket</h2>
            <hr></hr>
            {dataset.map((item) => (
              <BasketRow_cmp
                deleteBtnOnClick={() => deleteItem(item.id)}
                image={item.item.image}
                name={item.item.name}
                qty={item.itemQty}
                uPrice={item.item.unitPrice}
                saveEditBtn={(e) =>
                  updateItem(item.id, item.item.id, userId, e)
                }
              />
            ))}
          </div>
          <div className="offset-1 col-3">
            <h2>Order Summary</h2>
            <hr></hr>
            <br></br>

            <h6 class="card-subtitle mb-2 text-muted">Qty</h6>
            <h5 class="card-title">{summary.qty}</h5>
            <br></br>
            <h6 class="card-subtitle mb-2 text-muted">Discount Amount</h6>
            <h5 class="card-title">Rs. {summary.dAmount}</h5>
            <br></br>
            <h6 class="card-subtitle mb-2 text-muted">Amount</h6>
            <h3 class="card-title">Rs. {summary.amount}</h3>
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
    </div>
  );
};

export default Basket_page;
