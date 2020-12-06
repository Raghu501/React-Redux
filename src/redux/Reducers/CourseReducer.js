import initialState from "./initialState"

export default function courseReducer(state = initialState.courses, action) {//array of courses

    switch (action.type) {

        case "CREATE_COURSE":
            return [...state, { ...action.course }]

        case "LOAD_SUCCESS":
            //add to redux store
            return action.courses;
        case "UPDATE_COURSE":
            let c = { ...state.courses };
            let uc = c.find(x => x.id === action.course.id);
            return [...state, { ...uc }]

        case "DELETE_COURSE":
            //remove course from the array    
            break;

        default:
            return state;

    }


    //returns a new state

    //state is immutable, dont mutate


    //if the reducer receives an action that does not care about, just return the unchanged state

    //reducer handles slice of state

} 