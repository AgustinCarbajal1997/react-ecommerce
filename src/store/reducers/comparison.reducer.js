import { ADD_COMPARISON, DELETE_COMPARISON } from "../actions/comparison.action";

const INITIAL_STATE = {
    products:[]
}

const ComparisonReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case ADD_COMPARISON:
            const newComparison = [...state.products, action.payload];

            return { 
                ...state,
                products:newComparison
            }
        case DELETE_COMPARISON:
            const deleteComparison = state.products.filter(item => item.id !== action.payload);
            return {
                ...state,
                products:deleteComparison
            }
        default:
            return state;
    }
}

export default ComparisonReducer;