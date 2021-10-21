import React from "react";
import Confirmation_modal_cmp from "./Confirmation_modal_cmp";

const Item_card_cmp = (props) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-4 mb-4">
      {props.data?.map((item, index) => (
        <div className="col" key={index}>
          <div className="card shadow-sm">
            <img width={"100%"} height={225} src={item.image} />

            <div className="card-body">
              <p className="card-text">{item.name}</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">{item.unitPrice}</small>
                <div className="btn-group">
                  <button
                    type="button"
                    id={item.id}
                    className="btn btn-sm btn-outline-secondary"
                    onClick={props.onClick}
                  >
                    {item.id === "" ? "Create" : "Edit"}
                  </button>
                  {!(item.id === "") && (
                    <button
                      type="button"
                      id={item.id}
                      className="btn btn-sm btn-outline-danger"
                      onClick={props.onClickDelete}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Confirmation_modal_cmp
            mainBtnText="Yes"
            id="seller_item_delete_confirmation_modal_cmp"
            type="Confirmation"
            message="Are you sure?"
          />
        </div>
      ))}
    </div>
  );
};

export default Item_card_cmp;
