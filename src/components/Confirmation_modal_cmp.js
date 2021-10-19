import React from "react";

const confirmation_modal_cmp = (props) => {
  return (
    <div
      class="modal fade"
      id="confirmation_modal_cmp"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Warning</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Are you sure?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={props.onClickBtn2}
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default confirmation_modal_cmp;
