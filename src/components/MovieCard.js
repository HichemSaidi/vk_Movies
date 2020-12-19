import React, { Component } from 'react'
import './MovieCard.css';
import YoutubeModal from "react-youtube-modal";




function MovieCard (props) {
    

        return (
            <div id="moviecard" className="col-xl-3">
                <img src={`https://image.tmdb.org/t/p/w500${props.poster}`}></img>
                <h3>{props.title}</h3>
                <p className="nopadding">1hr 35min | PG
                <br/>
                Released {props.release_date}</p>
                <YoutubeModal videoId={props.trailer} height='720px'width="1280px">
                 <button type="button" className="btn-trailer mb-4">Trailer</button>
                </YoutubeModal>

                









            </div>
        )
}

export default MovieCard
