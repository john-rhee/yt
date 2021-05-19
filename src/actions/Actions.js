import axios from 'axios';

export const DO_SEARCH = "DO_SEARCH";
export const SEARCHED_WORDS = "SEARCHED_WORDS";
export const GET_FAILURE = "GET_FAILURE";
export const GET_VIDEO = "GET_VIDEO";
export const GET_VIDEO_LIST = "GET_VIDEO_LIST";
export const CLICKED = "CLICKED";

export const doSearch = () => dispatch => {

};

export const searched_words = (sWords) => dispatch => {
 
    dispatch({type:SEARCHED_WORDS,payload:sWords})

};

export const clicked = (id) => dispatch => {
 
    dispatch({type:CLICKED,payload:id})

};

export const getResults = (q) => dispatch => {

    axios
        .get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&type=video&part=snippet&maxResults=21&q=` + q, {

          })
        .then(res => {
            console.log('response',res.data.items)
            dispatch({type:GET_VIDEO_LIST,payload:res.data.items})
            
            
        })
        .catch(error => {
            
            // dispatch({type:GET_FAILURE,payload:error})
    })
    
};
