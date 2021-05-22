import React, { createContext, useContext, useReducer } from "react";

export const StateContax = createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContax.Provider value={ useReducer(reducer, initialState)}>
        {children}
    </StateContax.Provider>
);

export const useStateValue = () => useContext(StateContax);