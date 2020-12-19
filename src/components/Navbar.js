import React, { Component } from 'react'
import './Navbar.css';


export class Navbar extends Component {
    render() {
        return (
 
            <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand"><img src='https://www.flaticon.com/svg/static/icons/svg/3074/3074767.svg'></img>   VK MOVIES</a>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </nav>
                        
  
        )
    }
}

export default Navbar

