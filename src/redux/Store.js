import React from "react"
import { createStore, applyMiddleware, compose } from "redux"
import rootreducer from "./Reducers/rootReducers"
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
//initialize store

//REdux middleware is a way to enhance redux behaviour
const store = (initialState) => {
    //devtools available
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootreducer,
        initialState,
        //warns us if we accidentally mutate state in store
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}

export default store;