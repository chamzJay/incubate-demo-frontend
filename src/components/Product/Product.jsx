import React from "react";

function Product({ product }) {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{product.name}</span>
        <span>Seller: {product.seller.username}</span>
        <div className="divider"></div>
        <p style={{ marginTop: 10 }}>{product.description}</p>
        <h5 style={{ textAlign: "right" }}>Rs.{product.price}</h5>
      </div>
    </div>
  );
}

export default Product;
