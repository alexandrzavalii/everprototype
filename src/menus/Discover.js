import React, {Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
class Discover extends Component{

    renderMenu(){
        return (
            <ul>
            <li><Link to='/maps'>Maps</Link></li>
            <li><Link to='/about'>About</Link></li>
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