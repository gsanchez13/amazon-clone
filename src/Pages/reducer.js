export const initalState = {
    basket: [
        {
            a: '',
            b: '',
        }
    ],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            //logic to add to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            //logic to remove from basket
            return { 
                state 
            };
        default:
            return state;
    }
}

export default reducer;
