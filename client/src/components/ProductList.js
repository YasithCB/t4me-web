import React from "react";
import ReactStars from "react-rating-stars-component";

import { MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

function ProductList(props) {
  return (
    <MDBCol md="12" lg="4" className="mb-3 mx-1" style={{ width: "32%" }}>
      <MDBCard>
        <div className="d-flex justify-content-end px-3 pt-3">
          <img src="\images\fav-empty.svg" alt="favorite" />
        </div>
        <MDBCardImage
          src={props.img}
          className="px-2"
          position="top"
          alt="products"
        />
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <p className="small">
              <a href="#!" className="text-muted link">
                {props.category}
              </a>
            </p>
            <p className="small text-danger">
              <s> {props.oldPrice} </s>
            </p>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0"> {props.heading} </h5>
            <h5 className="text-dark mb-0"> {props.newPrice} </h5>
          </div>

          <div class="d-flex justify-content-between mb-2">
            <p class="text-muted mb-0">
              Available: <span class="fw-bold"> {props.stock} </span>
            </p>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ProductList;
