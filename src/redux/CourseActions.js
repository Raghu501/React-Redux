import * as courseAPI from "../api/courseApi"
//action creators return actions
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

function saveCourseAction(course) {
    return {
        type: "UPDATE_COURSE",
        course: course
    }
}

function deleteCourseAction(course) {
    return {
        type: "DELETE_COURSE",
        course: course
    }
}


//all actions must have type property

//action creator is an object with type.


//A function that handles the action
//In react reducers handle the action

export function loadCourses() {
    debugger
    //redux-thunk middleware injects dispatch, no need to inject ourself
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

export function saveCourse(course) {
    debugger
    //redux-thunk middleware injects dispatch, no need to inject ourself
    return function (dispatch) {
        //async call
        return courseAPI.saveCourse(course).then(course => {
            debugger
            //get action object from action creator
            let action = saveCourseAction(course);
            //dipatch call to update the redux store
            dispatch(action);
        }).catch(error => {
            throw error;
        })
    }
}

export function deleteCourse(course) {
    return function (dispatch) {
        return courseAPI.deleteCourse(course.id).then(course => {
            let deleteAction = deleteCourseAction(course)
            dispatch(deleteAction);
        }).catch(error => {
            throw error;
        })
    }
}