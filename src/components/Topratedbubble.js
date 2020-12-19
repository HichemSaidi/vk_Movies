import React, { Component } from 'react'
import './Topratedbubble.css';


function Topratedbubble (props){
   
        return (
            <div className="container">
                <div id="rowed" className="row">
                <div className="col-xl-4">
                        <img src={`https://image.tmdb.org/t/p/w500${props.poster}`}></img>
                    </div>
                    <div className="col-xl-8">
                        <p>{props.release_date}</p>
                         <p>{props.title}</p>
                         
                </div>
                </div>
                    
               
                
            </div>
        )
    
}

export default Topratedbubble
