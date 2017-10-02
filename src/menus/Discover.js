import React, {Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom'

class Discover extends Component{

    renderMenu(){
        return (
            <ul>
            <li><Link to='/discover/maps'>Maps</Link></li>
            <li><Link to='/discover/about'>About</Link></li>
          </ul>
        )
    }

    render() {
            return(
                <Route exact path='/discover' component={this.renderMenu}/>
            );
    }
}

export default Discover;