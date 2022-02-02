import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Accordion } from "./productDetails/AccordionList";
import useCurrentWidth from "../../customHooks/useCurrentWidth";
import TableSpecifications from "./productDetails/TableSpecifications";
import BookMark from "../details/BookMark";
import ButtonsCart from "../details/ButtonsCart";

const ProductModel = ({ item }) => {
  const dataUser = useSelector((state) => state.auth.dataUser);
  const access_token = useSelector((state) => state.auth.access_token);
  const dispatch = useDispatch();
  const [currentImg, setCurrentImg] = useState(0);
  const witdh = useCurrentWidth();
  return (
    <>
      <div className="product-view-carousel">
        <div className="product-view-carousel__bigImage">
          <img src={item.images[currentImg]} alt={item.title} />
        </div>
        <div className="product-view-carousel__previewPics">
          {item.images.map((img, index) => {
            return (
              <img
                src={img}
                alt={item.title}
                key={index}
                onClick={() => setCurrentImg(index)}
              />
            );
          })}
        </div>
      </div>
      <div className="product-view-title-info">
        {dataUser && (
          <BookMark
            dataUser={dataUser}
            productId={item.id}
            dispatch={dispatch}
            access_token={access_token}
          />
        )}
        <h2>{item.title}</h2>
        <h3>${item.price}</h3>
        <ButtonsCart item={item}/>
      </div>
      <div className="product-view-specifications">
        <h2>{item.title}</h2>
        {witdh === "xs" || witdh === "sm" ? (
          <Accordion data={item.specifications} />
        ) : (
          <TableSpecifications data={item.specifications} />
        )}
      </div>
      <div className="product-view-features">
        <h3>Descripción</h3>
        <ul className="product-view-features__ul">
          {item.description.map((desc, index) => {
            return (
              <li key={index} className="product-view-features__li">
                <h3>{desc.title}</h3>
                <p>{desc.paragraph}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProductModel;
