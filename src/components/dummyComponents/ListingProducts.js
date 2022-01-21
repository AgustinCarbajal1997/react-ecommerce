import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ComparingProductsButton from "./comparison/ComparingProductsButton";
import ComparisonBar from "./comparison/ComparisonBar";

const ListingProducts = ({ products, productsState }) => {
  const sectionList = useRef(0);
  return (
    <section ref={sectionList} className="products-list">
      {products.map((item) => {
        return (
          <div key={item.id} className="products-list-item">
            <Link
              to={`/${item.article}/${item.id}-${item.title
                .split(" ")
                .join("-")}`}
            >
              <img
                className="products-list-item__image"
                src={item.images[0]}
                alt={item.title}
              />
              <h4 className="products-list-item__title">{item.title}</h4>
              <h5 className="products-list-item__price">${item.price}</h5>
            </Link>
            <ComparingProductsButton item={item}/>
          </div>
        );
      })}
      {
        productsState.length && <ComparisonBar clientWidth={sectionList.current.clientWidth} productsState={productsState}/>
      }
    </section>
  );
};

export default ListingProducts;
