import React, { Component } from 'react'
import Topratedbubble from './Topratedbubble.js';
import RandomMovies from './RandomMovies.js';
import './Toprated.css';
import axios from 'axios';
import { object } from 'prop-types';


const link = 'https://api.themoviedb.org/3/movie/popular?api_key=7f1a9ab21c04fc25c73f0115df15f92e&language=en-US&page=1'






export class Toprated extends Component {
    state = {
        movies:[],
        title:'',
        overview:'',
        date:'',
        poster:''
      }
 componentDidMount =() =>{
     this.handleSubmit()
 }
      
      handleSubmit = () => {
        axios.get(link)
          .then(res => {
            const movies = (res.data.results);
            this.setState({ movies });
           
          })
    
        }
    
    



    render() {
        const path ='https://image.tmdb.org/t/p/w500'
        const movies = Object
        .keys(this.state.movies)
        .map(key => 
          <Topratedbubble key={key}
          title={this.state.movies[key].original_title}
          overview={this.state.movies[key].overview}
          release_date={this.state.movies[key].release_date}
          poster= {this.state.movies[key].poster_path}
          />
          
          )


        
        return (
            <div className="container-fluid mt-5">
                <div id="rating-sec" className="row">
                    <div className="col-xl-9 d-flex"> 
                    <RandomMovies></RandomMovies>  
                    </div>

                    <div id="rated-sec-2" className=" nopadding col-xl-2 ">
                        <div className="rated-sec-3">
                        <h1>TRENDING MOVIES</h1>
                        {movies}    
                        </div>
                     </div>
                     <div className="col-xl-1"></div>
                </div>
            </div>
        )
    }
}

export default Toprated
