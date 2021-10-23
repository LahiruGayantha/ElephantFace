import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Item_card_cmp from "../../components/Item_card_seller_cmp";
import Navigation_cmp from "../../components/Navigation_seller_cmp";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

const Shop_page = (props) => {
  const history = useHistory();

  const { path, url } = useRouteMatch();

  const userId = useSelector((state) => state.user.id);
  const userType = useSelector((state) => state.user.type);

  const [dataSet, setDataSet] = useState([{}]);

  const getItems = () => {
    axios
      .get("/item/findByUser/" + userId)
      .then((result) => {
        console.log(result.data);
        setDataSet([
          {
            image:
              "https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png",
            name: "Create new item",
            unitPrice: "Post items to make your shop larger.",
            id: "",
          },
          ...result.data,
        ]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getItems();
  }, []);

  const deleteItem = (id) => {
    axios.delete("/item/delete/" + id).then(() => getItems());
  };

  return (
    <div className="container-fluid">
      <Navigation_cmp />

      <div className="container">
        <div className="row">
          <Item_card_cmp
            onClick={(e) =>
              history.push(
                e.target.id === ""
                  ? "/seller/item/new"
                  : "/seller/item/" + e.target.id
              )
            }
            onClickDelete={(e) => deleteItem(e.target.id)}
            data={dataSet}
          />
        </div>
      </div>
      <div>
        <div
          className="bg-light py-4"
          style={{
            position: "inherit",
          }}
        >
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              © 2021 ElephantDev All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop_page;
