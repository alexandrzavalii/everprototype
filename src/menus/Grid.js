import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Entertainment from './Entertainment';
import Discover from './Discover';
// The Header creates links that can be used to navigate
// between routes.
class Grid extends Component{
    render(){
            return(
                <div>
                    This is grid
                  <ul>
                    <Entertainment/>
                    <Discover />
                  </ul>
                </div>
            );
    }
}

export default Grid
