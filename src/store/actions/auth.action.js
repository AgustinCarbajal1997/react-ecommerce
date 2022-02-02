import Cookies from "universal-cookie";
const cookies = new Cookies();
export const LOGIN = "LOGIN";
export const CONTINUE_SESSION = "CONTINUE_SESSION";
export const SET_FAVORITES = "SET_FAVORITES";
export const POST_CART = "POST_CART";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
export const CONFIRM_PURCHASE = "CONFIRM_PURCHASE";
export const CLEAN_STATE = "CLEAN_STATE";
export const login = (dataUser) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/auth/login`, {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify(dataUser),
      });
      const data = await response.json();
      cookies.set("tk", data.access_token, { maxAge: 1000000 });
      const responseProfile = await fetch(
        `http://localhost:8080/api/auth/dataUser`,
        {
          headers: {
            Authorization: `Bearer ${data.access_token}`,
          },
        }
      );
      const profileUser = await responseProfile.json();

      dispatch({
        type: LOGIN,
        payload: { access_token: data.access_token, dataUser: profileUser },
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const continueSession = (access_token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/auth/dataUser`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const errorMessage = { code:403, message:"El token no es válido o ha expirado" }
      if(response.status === 403) throw errorMessage;
      const dataUser = await response.json();
     
      dispatch({
        type: CONTINUE_SESSION,
        payload: { access_token, dataUser },
      });
    } catch (error) {
      console.log("error", error.message);
      cookies.remove("tk");
      dispatch({
        type:CLEAN_STATE
      })
    }
  };
};

export const setFavorites = (access_token, productId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/products/setFavorites`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
          method: "put",
          body: JSON.stringify({ productId }),
        }
      );
      const dataUser = await response.json();
      dispatch({ type: SET_FAVORITES, payload: dataUser.update });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postCart = (access_token, dataProduct) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/cart/postProductCart`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({ dataProduct }),
        }
      );
      const dataUser = await response.json();
      dispatch({ type: POST_CART, payload: dataUser.dataUser });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProductCart = (access_token, productId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/cart/deleteProductCart`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
          method: "delete",
          body: JSON.stringify({ productId }),
        }
      );
      const dataUser = await response.json();
      dispatch({ type: DELETE_PRODUCT_CART, payload: dataUser.dataUser });
    } catch (error) {
      console.log(error);
    }
  };
};

export const confirmPurchase = (access_token) => {
  return async (dispatch) => {
    try {
      
      const response = await fetch(
        `http://localhost:8080/api/purchase/confirmPurchase`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      const dataUser = await response.json();
      dispatch({ type: CONFIRM_PURCHASE, payload: dataUser.dataUser });
      
    } catch (error) {
      console.log(error);
    }
  };
};
// HACER EL CLEAN EN CASO DE QUE HAYA EXPIRADO EL TOKEN
// const cleanToken = () => {

// }
