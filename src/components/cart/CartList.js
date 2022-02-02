import React from "react";
import CartItem from "./CartItem";
const CartList = ({ products }) => {
    const clearProducts = () => {
        console.log("limpiar products")
    }
  return (
    <div className="cart-list">
      <div className="cart-list-title">
        <h2>Mi carrito</h2>
        <button onClick={() => clearProducts()}>LIMPIAR CARRITO</button>
      </div>
      {products.map((item, index) => (
        <CartItem item={item} key={index} />
      ))}
    </div>
  );
};

export default CartList;
