//Root reducer that composes child reducers
import React from "react"
import { combineReducers } from "redux"
import courseReducer from "./CourseReducer"

const rootreducer = combineReducers({
    courses: courseReducer
})

export default rootreducer