import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ComparisonReducer from "./reducers/comparison.reducer";
import AuthReducer from "./reducers/auth.reducer";
import ProductsReducer from "./reducers/products.reducer";

const RootReducer = combineReducers({
    products: ProductsReducer,
    comparison:ComparisonReducer,
    auth:AuthReducer
})
export default createStore(RootReducer, applyMiddleware(thunk))