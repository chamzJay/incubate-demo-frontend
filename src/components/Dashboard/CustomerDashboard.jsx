import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import axios from "axios";
function CustomerDashboard() {
  const [productList, setProductList] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const calculateNumberOfPages = (total, divider) => {
    return Math.ceil(total / divider);
  };
  const fetchDataFromPaginate = async (key) => {
    let skip = key * 10;
    try {
      let productList = await axios.get(
        "http://localhost:3000/api/product/all?skip=" + skip.toString()
      );
      setProductList(productList.data.products);
      setNumberOfPages(calculateNumberOfPages(productList.data.count, 10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        let productList = await axios.get(
          "http://localhost:3000/api/product/all?skip=0"
        );
        setProductList(productList.data.products);
        setNumberOfPages(calculateNumberOfPages(productList.data.count, 10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  const productListComponent = () => {
    return productList.map((product) => {
      return (
        <div className="col s12 m6 l4" key={product._id}>
          <Product product={product}></Product>
        </div>
      );
    });
  };

  const paginationComponent = () => {
    return (
      <ul className="pagination">
        <li className="waves-effect">
          <i className="material-icons red-text">chevron_left</i>
        </li>

        {[...Array(numberOfPages)].map((e, i) => (
          <li
            className="active waves-effect"
            key={i}
            style={{ marginRight: 2 }}
          >
            <div
              onClick={() => {
                fetchDataFromPaginate(i);
              }}
              className="btn-small z-depth-0 transparent"
            >
              {i + 1}
            </div>
          </li>
        ))}

        <li className="waves-effect">
          <i className="material-icons red-text">chevron_right</i>
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
