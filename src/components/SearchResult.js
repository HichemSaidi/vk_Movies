import React, { Component } from 'react'
import MovieCard from './MovieCard';


export class SearchResult extends Component {
    constructor(props) {
        super(props);
        
      }
    
    render() {
        const path ='https://image.tmdb.org/t/p/w500'
        const movies = Object
        .keys(this.props.movies)
        .map(key => 
          <MovieCard key={key} 
          title={this.props.movies[key].original_title}
          release_date={this.props.movies[key].release_date}
          poster= {this.props.movies[key].poster_path}
          trailer = {this.props.youtube[key]}
          
          />
          )
        return (
            <div>
                 <div className="container-fluid" style={{width:"90%"}}>
                <div className="row">
                {movies}
                </div>
            </div>
            </div>
        )
    }
}

export default SearchResult
