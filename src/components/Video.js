import React from 'react';
import { connect } from 'react-redux';
import { clicked } from '../actions/Actions';

function Video(props) {

return (

    <div className="videodiv"> 
        <img src={props.videos.snippet.thumbnails.high.url} alt="video thumbnail" onClick={() => {

            props.clicked(props.videos.id.videoId);
            window.scrollTo({
                top: 0,
                behavior: "auto"
                })
            }
        } 

        className="videoimg"

        />
        <h4 className="videotitle">{props.videos.snippet.channelTitle}</h4>
        <h3 className="videodes">{props.videos.snippet.description}</h3>
        
    </div>
)


}

const dispatchToProps = {
    clicked
  };
  
const mapStateToProps = state => {
    return {
        returnedSearched: state
    };
};

export default connect(mapStateToProps,dispatchToProps)(Video)