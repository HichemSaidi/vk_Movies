import React, { Component } from 'react'
import './MovieDetails.css';

function MovieDetails (props) {



        return (
            <div className="container-fluid" id="big">
                <div className="row">
                <div className="col-xl-3">

                    <h1> {props.title}</h1>
                    <p> Released {props.release_date}</p>
                </div>
                <div className="col-xl-9" id="movieposterbg" style={{backgroundImage: `url(${props.poster})`}}>media</div>
                </div>

            </div>
        )
    }


export default MovieDetails
