import React, {Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
class Sections extends Component{

    renderMenu(){
        return (
            <ul className="sections">
            <li><Link to='/entertainment'>Entertainment</Link></li>
            <li><Link to='/discover'>Discover</Link></li>
          </ul>
        )
    }

    render() {
            return(
                this.renderMenu()
            );
    }
}

export default Sections;