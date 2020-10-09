import * as courseAPI from "../api/courseApi"
export function createCourse(course) {

    return {
        type: "CREATE_COURSE",
        course: course//optional
    }
}

function getLoadSuccess(courses) {
    return {
        type: "LOAD_SUCCESS",
        courses: courses
    }
}
//all actions must have type property

//action creator is an object with type.


//A function that handles the action
//In react reducers handle the action

export function loadCourses() {
    //redux-thunk injects dispatch, no need to inject ourself
    return function (dispatch) {
        //async call
        return courseAPI.getCourses().then(courses => {
            debugger
            //get action object from action creator
            let action = getLoadSuccess(courses);
            //dipatch call to update the redux store
            dispatch(action);
        }).catch(error => {
            throw error;
        })
    }
}

