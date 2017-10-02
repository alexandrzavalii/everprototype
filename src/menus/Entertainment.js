import React, {Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
class Entertainment extends Component {

    renderMenu() {
        return (
            <ul>
            <li><Link to='/entertainment/movies'>Movies</Link></li>
            <li><Link to='/entertainment/tv'>Tv</Link></li>
            <li><Link to='/entertainment/audio'>Audio</Link></li>
          </ul>
        )
    }

    render() {
            return(
                <Switch>
                <Route exact path='/entertainment' component={this.renderMenu}/>
                <Route exact path='/' component={this.renderMenu}/>
                </Switch>
                
            );
    }
}

export default Entertainment;