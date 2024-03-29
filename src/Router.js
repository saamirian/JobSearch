import React from 'react';
import { Switch, Route } from 'react-router-dom'
import  HomePage  from './pages/homepage'
import AllJobs from './pages/alljobs'
import  Search  from './pages/searchresult'
import SelectedJob from './pages/selectedjob';



const Router = () => (
    <Switch>
        <Route exact path='/' component ={HomePage} />
        <Route exact path='/alljobs' component ={AllJobs} />
        <Route exact path='/search' component ={Search} />
        <Route exact path='/selectedjob/:id' component ={SelectedJob} />

          
    </Switch>
)
export default Router;