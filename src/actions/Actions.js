export const DO_SEARCH = "DO_SEARCH";
export const SEARCHED_WORDS = "SEARCHED_WORDS";

export const doSearch = () => dispatch => {

};

export const searched_words = (sWords) => dispatch => {
 
    dispatch({type:SEARCHED_WORDS,payload:sWords})

};
