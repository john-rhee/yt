import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

function Video(props) {

return (

    <div> 
        <img src={props.videos.snippet.thumbnails.high.url}/>
        <h4>{props.videos.snippet.title}</h4>
        {/* <YouTube videoId={props.videos.id.videoId}/> */}
    </div>
)


}


const dispatchToProps = {
    
  };
  
const mapStateToProps = state => {
    return {
        returnedSearched: state
    };
};

export default connect(mapStateToProps,dispatchToProps)(Video)