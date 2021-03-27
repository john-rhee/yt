import React from 'react';
import { connect } from 'react-redux';
import { clicked } from '../actions/Actions';

function Video(props) {

return (

    <div className="videodiv"> 
        <img src={props.videos.snippet.thumbnails.high.url} onClick={() => {

            props.clicked(props.videos.id.videoId);
            window.scrollTo({
                top: 0,
                behavior: "auto"
                })
            }
        } 

        className="videoimg"

        />

        <h4 className="videotitle">{props.videos.snippet.title}</h4>
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