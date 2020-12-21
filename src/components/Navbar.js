import React, { Component } from 'react'
import './Navbar.css';
import axios from 'axios';
import Cover from './Cover';
import RandomMovies from './RandomMovies';
import MovieDetails from './MovieDetails';
import SearchResult from './SearchResult';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export class Navbar extends Component {
  state = {
    query:'',
    movies:[],
  
  }

 
    handleChange = event => {
      this.setState({ query : event.target.value}, () => {
          console.log(this.state.query)
      })
  
  }

  handleSubmit = async ()=>{
    var link = `https://api.themoviedb.org/3/search/movie?api_key=7f1a9ab21c04fc25c73f0115df15f92e&language=en-US&query=${this.state.query}&page=1&include_adult=false`
  await axios.get(link)
      .then(res => {
        const movies = res.data.results;
        
        this.setState({ movies : movies });
      })
     
      console.log(this.state.movies)
  
 }


 




    render() {
        return (
            <div>
              <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand"><img src='https://www.flaticon.com/svg/static/icons/svg/3074/3074767.svg'></img>   VK MOVIES</a>
            <div className="form-inline">
              <input className="form-control mr-sm-2" type ='search' onKeyDown={this.onEnterPress}  onChange={this.handleChange}  placeholder="Search" />
              <button onClick={this.handleSubmit}></button>
            </div>
          </nav>
                <Cover></Cover>
                <Router>
                  <Switch>
                        <Route  exact path="/" component={RandomMovies}></Route>
                        <Route  exact path="/MovieDetails" component={MovieDetails }></Route>
                        <Route  exact path="/SearchResult" component={SearchResult}></Route>

                  </Switch>
                 </Router>

                 


            </div>
            
         
           
                        
  
        )
    }
}

export default Navbar

