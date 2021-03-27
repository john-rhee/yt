import React, {useState} from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';
import { searched_words, getResults } from '../actions/Actions';
import Video from './Video';
import logo from '../img/ytlogo.png';

function Main(props) {

    const [state, setState] = useState({

        searchedWords: ''

    })

    const handleChanges = e => {

        setState({
            searchedWords: e.target.value
        })

        props.searched_words(e.target.value)

      };

    const submitForm = e => {
        e.preventDefault();
        console.log("Button Working");
        props.getResults(props.returnedSearched.searched)

        }


    console.log(props.returnedSearched)    

    return (

        <div>
            <div className="top">
                <img src={logo} alt="Youtube logo" className="ytlogo"/>
                <div className="topletter">Project</div>
            </div>
            

            {/* {props.returnedSearched.searched? 
                <div>You searched "{props.returnedSearched.searched}"</div>
            : (    
                <div>You haven't searched anything</div>
            )} */}

            <form className="sbar" onSubmit={submitForm} >
            
                <input className="search" type="search" name="search" id="search" placeholder="Search" value={state.searchedWords} onChange={handleChanges}/>

                <button type="submit">Search</button>

            </form>
            
            {props.returnedSearched.clicked? 
                <div>
                <YouTube videoId={props.returnedSearched.clicked}/> 
                </div>
            : (    
                null
            )}
                
            {props.returnedSearched.data? 
                <div className="list">

                    {console.log("returned data",props.returnedSearched.data)}

                    {props.returnedSearched.data.map(videos => (
                        <Video key={videos.id.videoId} videos={videos} />

                    ))}
                 
                </div>
            : (    
                <YouTube videoId={"2g811Eo7K8U"}/>
            )}


            
            
        
        </div>

    )

}


const dispatchToProps = {
    searched_words,
    getResults
  };
  
const mapStateToProps = state => {
    return {
        returnedSearched: state
    };
};

export default connect(mapStateToProps,dispatchToProps)(Main)
