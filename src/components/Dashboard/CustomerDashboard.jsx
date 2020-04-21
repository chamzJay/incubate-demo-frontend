import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
function CustomerDashboard() {
  const [productList, setProductList] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  useEffect(() => {
    setProductList([
      {
        id: "01",
        name: "Sony Vega",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem id dolore nisi? Quia dolore cumque libero maxime nobis omnis enim laboriosam repellendus! Possimus impedit consequatur quis veritatis animi quaerat.",
        price: "21",
        seller: "chamara",
      },
    ]);
    setNumberOfPages(10);
  }, []);
  const productListComponent = () => {
    return productList.map((product) => {
      return (
        <div className="col s12 m6 l4" key={product.id}>
          <Product product={product}></Product>
        </div>
      );
    });
  };

  const paginationComponent = () => {
    return (
      <ul className="pagination">
        <li className="waves-effect">
          <div className="btn-small z-depth-0 transparent">
            <i className="material-icons red-text">chevron_left</i>
          </div>
        </li>

        {[...Array(numberOfPages)].map((e, i) => (
          <li
            className="active waves-effect"
            key={i}
            style={{ marginRight: 2 }}
          >
            <div className="btn-small z-depth-0 transparent">{i + 1}</div>
          </li>
        ))}

        <li className="waves-effect">
          <div className="btn-small z-depth-0 transparent">
            <i className="material-icons red-text">chevron_right</i>
          </div>
        </li>
      </ul>
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h4>Products</h4>
      <div className="row">{productListComponent()}</div>
      <div className="row">
        <div
          style={{ position: "fixed", bottom: "10vh", width: "100%" }}
          className="col s8 offset-s4 "
        >
          {paginationComponent()}
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
