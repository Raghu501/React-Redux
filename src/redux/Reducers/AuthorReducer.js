import React from 'react'
import initialState from "./initialState"

export default function AuthorReducer(state = initialState.authors, action) {

    switch (action.type) {
        case "LOAD_AUTHOR_SUCCESS":
            //add to store
            return action.authors
        default:
            return state;

    }
}


