import axios from 'axios';

export const DO_SEARCH = "DO_SEARCH";
export const SEARCHED_WORDS = "SEARCHED_WORDS";
export const GET_FAILURE = "GET_FAILURE";
export const GET_VIDEO = "GET_VIDEO";

export const doSearch = () => dispatch => {

};

export const searched_words = (sWords) => dispatch => {
 
    dispatch({type:SEARCHED_WORDS,payload:sWords})

};

export const getResults = (q) => dispatch => {

    

    axios
        .get("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {

            headers: {
                "x-rapidapi-key": "",
                "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
                "useQueryString": true
            }
          })
        .then(res => {
            console.log('response',res)
            dispatch({type:GET_VIDEO,payload:res.data.items[1].id})
            
        })
        .catch(error => {
            
            // dispatch({type:GET_FAILURE,payload:error})
    })
    
};
