import React from 'react';
import YouTube from 'react-youtube';

function Main(props) {

    const handleChanges = e => {

      };

    const submitForm = e => {
        e.preventDefault();
        console.log("Button Working")

        }

    return (

        <div>

            <div>Youtube Search</div>

            <form onSubmit={submitForm} >
            
            <input className="search" type="search" name="search" id="search" placeholder="Search" />

            <button type="submit">Search</button>

            </form>

            <YouTube videoId="2g811Eo7K8U"/>
        
        </div>

    )

}

export default Main
