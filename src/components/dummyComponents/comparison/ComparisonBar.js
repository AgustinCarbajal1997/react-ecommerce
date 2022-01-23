import React, { useState } from "react";
import useFetch from "../../../customHooks/useFetch";
import { Link } from "react-router-dom";
import { BiDownArrow } from "react-icons/bi";
const ComparisonBar = ({ clientWidth, productsState, deleteAllComparison }) => {
  const [hide, setHide] = useState(false);
  const query = productsState.reduce(
    (ac, item, idx) => (!idx ? ac + "?q[]=" + item : ac + "&q[]=" + item),
    ""
  );
  const { data } = useFetch(
    `http://localhost:8080/api/products/getSeveralIds${query}`
  );
  return (
    <div
      className="comparison-bar-container"
      style={{ width: `${clientWidth}px` }}
    >
      <div className="comparison-bar-title">
        <h4>
          Podés comparar hasta 4 productos similares{" "}
          <span> {productsState.length} </span>
        </h4>
        <div onClick={() => setHide(!hide)} style={{ transform:`rotate(${hide ? "180" : "0"}deg)`}}>
          <BiDownArrow color="#ffffff" size={"1.5em"} />
        </div>
      </div>
      <div
        className="comparison-bar-fields"
        style={{ display: hide ? "none" : "flex" }}
      >
        <div className="comparison-bar-fields-products">
          {data &&
            data.length > 0 &&
            data.map((item, idx) => (
              <div key={idx}>
                <div className="comparison-bar-fields-products__img">
                  <img src={item.images[0]} alt={item.id} />
                </div>
                <div className="comparison-bar-fields-products__data">
                  <h5>{item.title.slice(0, 35)}</h5>
                  <h6>$ {item.price}</h6>
                </div>
              </div>
            ))}
        </div>
        <div className="comparison-bar-fields-buttons">
          <Link
            to={"/comparar"}
            className="comparison-bar-fields-buttons-compare"
          >
            COMPARAR
          </Link>
          <button className="comparison-bar-fields-buttons-delete" onClick={()=>deleteAllComparison()}>
            Borrar todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;
