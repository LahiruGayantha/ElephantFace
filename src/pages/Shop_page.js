import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Item_card_cmp from "../components/Item_card_cmp";
import Navigation_cmp from "../components/Navigation_cmp";
import Confirmation_modal_cmp from "../components/Confirmation_modal_cmp";
import axios from "axios";

const Shop_page = (props) => {
  const history = useHistory();

  const [dataSet, setDataSet] = useState([{}]);

  const getItems = () => {
    axios
      .get("/item/all")
      .then((result) => {
        console.log(result.data);
        setDataSet(result.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="container-fluid">
      <Navigation_cmp />
      <div className="container">
        <div className="row">
          <Item_card_cmp
            onClick={(e) => history.push("/item/" + e.target.id)}
            data={dataSet}
          />
        </div>
      </div>
      <footer>
        <div className="bg-light py-4">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              © 2021 ElephantDev All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <Confirmation_modal_cmp
        onClickBtn2={() => {
          history.push("/cart");
        }}
      />
    </div>
  );
};

export default Shop_page;
