import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ComparisonReducer from "./reducers/comparison.reducer";

import ProductsReducer from "./reducers/products.reducer";

const RootReducer = combineReducers({
    products: ProductsReducer,
    comparison:ComparisonReducer
})
export default createStore(RootReducer, applyMiddleware(thunk))