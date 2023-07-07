import React, { createContext, useContext, useReducer } from "react";

//setting up data layer
//for basket & user

//Build provider and wrap app in entire provider

//BUILDS DATA LAYER
export const StateContext = createContext();

//BUILDS PROVIDER
export const StateProvider = ({ reducer, initalState, children }) => (
    < StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
);

//this is how we use the inside of a component
export const useStateValue = () => useContext(StateContext);
