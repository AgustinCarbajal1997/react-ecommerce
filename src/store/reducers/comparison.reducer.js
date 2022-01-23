import { ADD_COMPARISON, DELETE_COMPARISON } from "../actions/comparison.action";

const INITIAL_STATE = {
    products:[]
}

const ComparisonReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case ADD_COMPARISON:
            let newComparison;
            const isExisted = state.products.find(item => item === action.payload);
            if(!isExisted && state.products.length>=4) return state;
            isExisted
                ? newComparison = state.products.filter(item => item !== action.payload)
                : newComparison = [...state.products, action.payload]
            return { 
                ...state,
                products:newComparison
            }
        case DELETE_COMPARISON:
            return {
                ...state,
                products:[]
            }
        default:
            return state;
    }
}

export default ComparisonReducer;