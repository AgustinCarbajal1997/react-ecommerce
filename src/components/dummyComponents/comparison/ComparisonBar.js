import React from "react";
import useFetch from "../../../customHooks/useFetch";
import { Link } from "react-router-dom";
const ComparisonBar = ({ clientWidth, productsState }) => {
  const query = productsState.reduce(
    (ac, item, idx) => (!idx ? ac + "?q[]=" + item : ac + "&q[]=" + item),
    ""
  );
  const { data } = useFetch(
    `http://localhost:8080/api/products/getSeveralIds${query}`
  );
  console.log(productsState)
  return (
    <div
      className="comparison-bar-container"
      style={{ width: `${clientWidth}px` }}
    >
      <div className="comparison-bar-title">
        <h4>
          Podés comparar hasta 4 productos similares <span> {productsState.length} </span>
        </h4>
      </div>
      <div className="comparison-bar-fields">
        <div className="comparison-bar-fields-products">
          {
              data && data.length>0 && data.map((item, idx) => (
                  <div key={idx}>
                      <div className="comparison-bar-fields-products__img">
                          <img src={item.images[0]} alt={item.id}/>
                      </div>
                      <div className="comparison-bar-fields-products__data">
                        <h5>{item.title.slice(0, 35)}</h5>
                        <h6>$ {item.price}</h6>
                      </div>
                  </div>
              ))
          }
        </div>
        <div className="comparison-bar-fields-buttons">
          <Link to={"/comparar"} className="comparison-bar-fields-buttons-compare">
            COMPARAR
          </Link>
          <button className="comparison-bar-fields-buttons-delete">
            Borrar todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;
