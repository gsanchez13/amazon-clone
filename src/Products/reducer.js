export const initalState = {
    basket: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            //logic to add to basket
            break;
        case "REMOVE_FROM_BASKET":
            //logic to remove from basket
            break;
        default:
            return state;
    }
}

export default reducer;
