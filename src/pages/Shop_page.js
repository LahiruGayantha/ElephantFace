import React from "react";
import { useHistory } from "react-router";
import Item_card_cmp from "../components/Item_card_cmp";
import Navigation_cmp from "../components/Navigation_cmp";

const Shop_page = (prop) => {
  const history = useHistory();
  return (
    <div className="container-fluid">
      <div className="container">
        <Navigation_cmp />
        <div className="row">
          <Item_card_cmp
            onClick={(e) => history.push("/item/" + e.target.id)}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9]}
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
    </div>
  );
};

export default Shop_page;
