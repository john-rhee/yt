import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

function Video(props) {

return (

    <div> 
        <YouTube videoId={props.videos.id.videoId}/>
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