
export default function courseReducer(state = [], action) {//array of courses

    switch (action.type) {
        case "CREATE_COURSE":
            return [...state, { ...action.course }]

        case "LOAD_SUCCESS":
            return action.courses;
        default:
            return state;

    }


    //returns a new state

    //state is immutable, dont mutate


    //if the reducer receives an action that does not care about, just return the unchanged state

    //reducer handles slice of state

} 