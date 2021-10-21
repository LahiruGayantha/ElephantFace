import React, { useEffect, useState } from "react";
import Navigation_cmp from "../../components/Navigation_seller_cmp";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import Confirmation_modal_cmp from "../../components/Confirmation_modal_cmp";
import { useSelector } from "react-redux";

const Item_page = (props) => {
  const history = useHistory();
  const userId = useSelector((state) => state.user.id);
  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    name: "",
    description: "",
    unitPrice: "",
    image: "",
  });

  useEffect(() => {
    if (id !== "new")
      axios.get("/item/find/" + id).then((result) => {
        setData({ ...result.data, qty: 1, amount: result.data.unitPrice });
      });
    else {
      setData((cur) => ({
        ...cur,
        image:
          "https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png",
      }));
    }
  }, []);

  const confirmationHandler = () => {
    if (id === "new") {
      axios
        .post("/item/add", {
          name: data.name,
          description: data.description,
          unitPrice: parseFloat(data.unitPrice),
          image: data.image,
          ownerId: parseInt(userId),
        })
        .then((result) => {
          history.push("/seller/shop");
        })
        .catch((e) => console.log(e));
    } else {
      axios
        .put("/item/update/" + id, {
          name: data.name,
          description: data.description,
          unitPrice: parseFloat(data.unitPrice),
          image: data.image,
          ownerId: parseInt(userId),
        })
        .then((result) => {
          history.push("/seller/shop");
        })
        .catch((e) => console.log(e));
    }
  };

  const textChange = (key, value) => {
    setData((cur) => ({ ...cur, [key]: value }));
  };

  return (
    <div className="container-fluid">
      <Navigation_cmp />

      <div className="container pt-5 text-center">
        <h5>Fill all the details</h5>
        <hr></hr>
        <div className="row mt-5">
          <div className="offset-2 col-4">
            <img
              src={data.image}
              width={"100%"}
              className="img-fluid shadow-sm border border-1"
              alt="..."
            />
            <div class="input-group mt-3 pr-4">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Image Url
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={data.image}
                onChange={(e) => textChange("image", e.target.value)}
              />
            </div>
          </div>
          <div className="col-4 text-start">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Name
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={data.name}
                onChange={(e) => textChange("name", e.target.value)}
              />
            </div>
            <div class="input-group mb-3">
              <textarea
                class="form-control"
                aria-label="With textarea"
                placeholder="Description"
                value={data.description}
                onChange={(e) => textChange("description", e.target.value)}
              ></textarea>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Unit Price
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Rs."
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={data.unitPrice}
                onChange={(e) => textChange("unitPrice", e.target.value)}
              />
            </div>
            <button
              disabled={
                data.description == "" ||
                data.image == "" ||
                data.name == "" ||
                data.unitPrice == ""
              }
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#seller_item_confirmation_modal_cmp"
            >
              Save
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
      <Confirmation_modal_cmp
        mainBtnText="Yes"
        id="seller_item_confirmation_modal_cmp"
        type="Confirmation"
        message="Are you sure?"
        onClickBtn2={() => confirmationHandler()}
      />
    </div>
  );
};

export default Item_page;
