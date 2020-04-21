import React, { useState } from "react";

function AddItem({ displayMessage }) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const validateForm = () => {
    if (productName === "" || productDescription === "" || productPrice === 0) {
      return false;
    }
    return true;
  };

  const postProduct = () => {
    const product = {
      name: productName,
      description: productDescription,
      price: productPrice,
    };
    if (!validateForm()) {
      displayMessage("warning", "Please fill all fields correctly.");
      return;
    }
    console.log(product);
    displayMessage("success", "Product added successfully");
    clearForm();
  };

  const clearForm = () => {
    setProductName("");
    setProductDescription("");
    setProductPrice(0);
  };

  return (
    <div className="row">
      <div className="col s12 center">
        <form>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              type="text"
              id="p_name"
            />
            <label htmlFor="p_name">Product Name</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <textarea
              value={productDescription}
              onChange={(e) => {
                setProductDescription(e.target.value);
              }}
              id="p_description"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="p_description">Product Description</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input
              value={productPrice}
              onChange={(e) => {
                setProductPrice(e.target.value);
              }}
              type="number"
              min="0"
              id="p_price"
            />
            <label htmlFor="p_price">Product Price</label>
          </div>
          <div onClick={postProduct} className="btn z-depth-0">
            Add Product
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
