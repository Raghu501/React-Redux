export function createCourse(course) {

    return {
        type: "CREATE_COURSE",
        course: course//optional
    }
}

//all actions must have type property

//action creator is an object with type.


//A function that handles the action
//In react reducers handle the action