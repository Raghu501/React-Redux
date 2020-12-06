import React from "react"
import Header from "./Components/Header"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"

import {
    Route,
    Switch,
} from "react-router-dom"
import Course from "./Components/Course/CoursesPage"
import ManageCoursesPage from "./Components/Course/ManageCoursePage"

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/About"><About /></Route>
                <Route exact path="/Home"><Home /></Route>
                <Route exact path="/Courses"><Course /></Route>
                <Route exact path="/Course/:slug" ><ManageCoursesPage /></Route>
                <Route exact path="/Course" component={ManageCoursesPage}></Route>
                <Route>Not found</Route>
            </Switch>

        </div>
    );
}

export default App;