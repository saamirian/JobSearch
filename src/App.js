import React from 'react';
import { NavLink } from 'react-router-dom'
import Router from './router'

const Navigation = (props) => <nav>
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/alljobs'>All jobs</NavLink></li>
   
    </ul>
</nav>

export class App extends React.Component {
    render() {
        return <div >
        <div >
            <h1>Find jobs</h1>
            
        </div>
            <Navigation />
            <Router />
        </div>
        
    }
}