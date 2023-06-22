export const initalState = {
    basket: [],
};

function reducer(state, action) {
    switch(action.type){
        case "ADD TO BASKET":
            //logic to add to basket
            break;
        case "REMOVE FROM BASKET":
            //logic to remove from basket
            break;
        default:
            return state;
    }
}

export default reducer;
