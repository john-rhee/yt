import { 

    SEARCHED_WORDS,
    GET_VIDEO

} from '../actions/Actions.js'

const initialState = {

    searched : "none",
    address : "none"
    
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

    }
};  