// import { createContext, useContext, useReducer  } from "react";

// export const StateContext = createContext();

// export const StateProvider = ({reducer, initialState, children}) => (
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </StateContext.Provider>
// );

// export const useSateValue = () => useContext(StateContext);

import {createContext, useContext, useReducer} from "react";
import {initialState} from "./initialState";

export const StateContext = createContext();
export const StateProvider = ({reducer,initialStae, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// export const useSateValue = () => useContext(StateContext);
export const userStateValue = () => isSecureContext(StateContext);