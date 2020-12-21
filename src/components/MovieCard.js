import React, { Component } from 'react'
import './MovieCard.css';
import YoutubeModal from "react-youtube-modal"; 
import { NavLink, Route,Link } from 'react-router-dom'





function MovieCard (props) {
    const link ="https://image.tmdb.org/t/p/w500"

        return (
            <div id="moviecard" className="col-xl-2">
                <div id="poster"style={{ backgroundImage: `url(${link}${props.poster})` }} > 
                <Link to={{pathname: "/MovieDetails", state: { fromDashboard: true } }}/>
</div>
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
