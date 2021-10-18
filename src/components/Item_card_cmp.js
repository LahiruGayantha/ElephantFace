import React from "react";

const Item_card_cmp = (props) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-5">
      {props.data?.map((item) => (
        <div className="col">
          <div className="card shadow-sm">
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>

            <div className="card-body">
              <p className="card-text">Mens White Shire</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Rs. 1250.00</small>
                <div className="btn-group">
                  <button
                    type="button"
                    id={item}
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
