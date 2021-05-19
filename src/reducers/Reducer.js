import { 

    SEARCHED_WORDS,
    GET_VIDEO_LIST,
    GET_VIDEO,
    CLICKED,
    GET_FAILURE,

} from '../actions/Actions.js'

const initialState = {

    searched : null,
    address : null,
    data: null,
    clicked: null
    
  };

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SEARCHED_WORDS:
        return {
            ...state,
            searched: action.payload
        }

        case GET_VIDEO:
        return {
            ...state,
            address: action.payload
        }

        case GET_VIDEO_LIST:
        return {
            ...state,
            data: action.payload
        }

        case CLICKED:
        return {
            ...state,
            clicked: action.payload
        }

        default:
            return state 

    }
};  