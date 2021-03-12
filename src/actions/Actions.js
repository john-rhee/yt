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
        .get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&type=video&part=snippet&maxResults=10&q=` + q, {

          })
        .then(res => {
            console.log('response',res)
            console.log('response',res.data.items[1].id.videoId)
            dispatch({type:GET_VIDEO,payload:res.data.items[1].id.videoId})
            
        })
        .catch(error => {
            
            // dispatch({type:GET_FAILURE,payload:error})
    })

    // axios
    //     .get("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {

    //         headers: {
    //             "x-rapidapi-key": "86adcb47a2msheafa1ea838cc811p183211jsn624c5d1a6362",
    //             "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
    //             "useQueryString": true
    //         }
    //       })
    //     .then(res => {
    //         console.log('response',res)
    //         dispatch({type:GET_VIDEO,payload:res.data.items[1].id})
            
    //     })
    //     .catch(error => {
            
    //         // dispatch({type:GET_FAILURE,payload:error})
    // })
    
};
