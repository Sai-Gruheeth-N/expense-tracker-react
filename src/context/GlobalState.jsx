// Creating context
import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';
// useReducer is used as a global reducer
// Reducer is a function that is able to process our message/Action. A reducer takes the existing state and applies the message on it. The end result is a new state.

/* Initial state */
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}