//Root reducer that composes child reducers
import React from "react"
import { combineReducers } from "redux"
import courseReducer from "./CourseReducer"
import authorReducer from "./AuthorReducer"
const rootreducer = combineReducers({
    courses: courseReducer,
    authors: authorReducer
})

export default rootreducer