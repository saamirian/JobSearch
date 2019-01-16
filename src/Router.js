import React from 'react';
import { Switch, Route } from 'react-router-dom'
import  HomePage  from './pages/homepage'
import AllJobs from './pages/alljobs'



const Router = () => (
    <Switch>
        <Route exact path='/' component ={HomePage} />
        <Route exact path='/alljobs' component ={AllJobs} />
          
    </Switch>
)
export default Router;