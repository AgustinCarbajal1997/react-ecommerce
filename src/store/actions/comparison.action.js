
export const ADD_COMPARISON = "ADD_COMPARISON"; 
export const DELETE_COMPARISON = "DELETE_COMPARISON"; 

export const addToCompare = (item) => ({
    type:ADD_COMPARISON,
    payload:item
})

export const deleteComparison = () => ({
    type:DELETE_COMPARISON
})