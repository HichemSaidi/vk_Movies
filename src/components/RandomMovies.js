import React, { Component } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';


const upcomingMovies ="https://api.themoviedb.org/3/movie/upcoming?api_key=7f1a9ab21c04fc25c73f0115df15f92e&language=en-US&page=1"
           
export class RandomMovies extends Component {
    state = {
        movies:[],
        id:[],
        youtube:[]   
        }

componentDidMount =() =>{
this.getRandomMovies()
    
}      
async getRandomMovies() {
  await axios.get(upcomingMovies)
          .then(res => {
            const movies = (res.data.results);
            var id = new Array()
            var i = 0
            while (i < res.data.results.length){
                (id).push(res.data.results[i].id)
                i++
            }
            this.setState({id : id })
            this.setState({ movies });
          })   

          const Youtubelink =[]
          let index = 0
          console.log('ta mere la puteee')
          var youtubeArray=[]
          while (index < this.state.id.length) {
            var datakey =""
            var movie_id = this.state.id[index]
            const videolinks =`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=7f1a9ab21c04fc25c73f0115df15f92e&language=en-US`
         await axios.get(videolinks)
          .then (res=> {
            datakey = (res.data.results[0].key)
          
          })
          .catch(error => {
            datakey = "cant find any value"
        });
          youtubeArray.push(datakey)
          index++;
        }
        this.setState({youtube : youtubeArray})
              
      }



    render() {
        const path ='https://image.tmdb.org/t/p/w500'
        const movies = Object
        .keys(this.state.movies)
        .map(key => 
          <MovieCard key={key} 
          title={this.state.movies[key].original_title}
          release_date={this.state.movies[key].release_date}
          poster= {this.state.movies[key].poster_path}
          trailer = {this.state.youtube[key]}
          
          />
          
          )

        return (
          <div className="container-fluid" style={{width:"90%"}}>
                <div className="row">
                {movies}
                </div>
            </div>
        )
    }
}

export default RandomMovies
