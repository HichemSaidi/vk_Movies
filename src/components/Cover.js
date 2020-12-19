import React, { Component } from 'react'
import './Cover.css';


export class Cover extends Component {
    render() {
        return (
    
            <div id="cover" className="container-fluid nopadding">
                <div className="sec-1">
                <p>NOW PLAYING</p>
                <h1>NOW<span> PLAYING</span> </h1>
                <button>SHOWTIMES</button>
                </div>
               
            </div>
        )
    }
}

export default Cover
