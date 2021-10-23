import React from "react";

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
                <small className="text-muted">Rs. {item.unitPrice}</small>
                <div className="btn-group">
                  <button
                    type="button"
                    id={item.id}
                    className="btn btn-sm btn-outline-secondary"
                    onClick={props.onClick}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item_card_cmp;
