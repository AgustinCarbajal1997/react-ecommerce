import { DELETE_PRODUCT_CART, LOGIN, POST_CART, SET_FAVORITES } from "../actions/auth.action";
import { CONTINUE_SESSION } from "../actions/auth.action";
const INITIAL_STATE = {
  access_token: null,
  dataUser:null
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      const { access_token, dataUser } = action.payload
      return { ...state, access_token, dataUser };
    case CONTINUE_SESSION:
      const { access_token:token, dataUser:user } = action.payload
      return { ...state, access_token:token, dataUser:user }
    case SET_FAVORITES:
      return { ...state, dataUser:action.payload }
    case POST_CART:
      return { ...state, dataUser:action.payload }
    case DELETE_PRODUCT_CART:
      return { ...state, dataUser:action.payload }
    default:
      return state;
  }
};
export default AuthReducer;
