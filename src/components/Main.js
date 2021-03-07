import React, {useState} from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';
import { searched_words } from '../actions/Actions';

function Main(props) {
    
    console.log("HERE",props.returnedSearched)

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
        console.log("Button Working")

        }

    return (

        <div>
            <div>{state.searchedWords}</div>

            {props.returnedSearched? 
                <div>{props.returnedSearched.searched}</div>
            : (    
                <div>none searched</div>
            )}


            <div>{}</div>
            <div>Youtube Search</div>

            <form onSubmit={submitForm} >
            
            <input className="search" type="search" name="search" id="search" placeholder="Search" value={state.searchedWords} onChange={handleChanges}/>

            <button type="submit">Search</button>

            </form>

            <YouTube videoId="2g811Eo7K8U"/>
        
        </div>

    )

}


const dispatchToProps = {
    searched_words
  };
  
const mapStateToProps = state => {
    return {
        returnedSearched: state
    };
};

export default connect(mapStateToProps,dispatchToProps)(Main)
