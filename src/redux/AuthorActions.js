import * as authorsAPI from "../api/AuthorApi"
export function createAuthor(author) {
    return {
        type: "CREATE_AUTHOR",
        author: author//optional
    }
}

function getLoadAuthorSuccess(authors) {
    return {
        type: "LOAD_AUTHOR_SUCCESS",
        authors: authors
    }
}
//all actions must have type property

//action creator is an object with type.


//A function that handles the action
//In react reducers handle the action

export function loadAuthors() {
    //redux-thunk injects dispatch, no need to inject ourself
    return function (dispatch) {
        //async call
        //rerurn promise
        return authorsAPI.getAuthors().then(authors => {
            // alert("A")
            console.log(authors)
            //get action object from action creator
            let action = getLoadAuthorSuccess(authors);
            //dipatch call to update the redux store
            dispatch(action);
        }).catch(error => {
            throw error;
        })
    }
}

