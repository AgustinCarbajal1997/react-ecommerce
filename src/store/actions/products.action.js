import { URL_PRODUCTS } from "../../constants/db";

export const GET_PRODUCTS = "GET_PRODUCTS";


export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_PRODUCTS);
      const products = await response.json();
      console.log(products);

      dispatch({ type: GET_PRODUCTS, payload: products });
    } catch (error) {
      console.log(error.message);
    }
  };
};


