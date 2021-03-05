import React, {useState} from 'react';
import YouTube from 'react-youtube';

function Main(props) {

    const [state, setState] = useState({

        searchedWords: ''

    })

    const handleChanges = e => {

        setState({
            searchedWords: e.target.value
        })

      };

    const submitForm = e => {
        e.preventDefault();
        console.log("Button Working")

        }

    return (

        <div>
            <div>{state.searchedWords}</div>
            <div>Youtube Search</div>

            <form onSubmit={submitForm} >
            
            <input className="search" type="search" name="search" id="search" placeholder="Search" value={state.searchedWords} onChange={handleChanges}/>

            <button type="submit">Search</button>

            </form>

            <YouTube videoId="2g811Eo7K8U"/>
        
        </div>

    )

}

export default Main
