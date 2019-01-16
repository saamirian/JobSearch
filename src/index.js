import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  { App } from './App'


const appn = 
<BrowserRouter> 
        <App />
    </BrowserRouter>


ReactDOM.render( 
    appn ,
    document.getElementById('reactroot')
);
