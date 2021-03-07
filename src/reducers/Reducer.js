import { 

    SEARCHED_WORDS

} from '../actions/Actions.js'

const initialState = {

    searched : "none"
    
  };

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SEARCHED_WORDS:
        return {
            ...state,
            searched: action.payload
        }

    }
};  