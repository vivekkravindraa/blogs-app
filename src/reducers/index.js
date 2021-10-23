import {
    GET_POSTS,
    GET_COMMENTS
} from '../actions/types';

const initialState = {
    posts: [],
    comments: []
}

export const rootReducer = (state = initialState, action) => {
    // console.log(state, action);
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        default:
            return state;
    }
}
