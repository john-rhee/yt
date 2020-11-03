import React from 'react';
import YouTube from 'react-youtube';

function Main(props) {

    

    return (

        <div>

            <div>Youtube Search</div>
            
            <input className="search" type="search" name="search" id="search" placeholder="Search" />

            <YouTube videoId="2g811Eo7K8U"/>
        
        </div>

    )

}

export default Main
