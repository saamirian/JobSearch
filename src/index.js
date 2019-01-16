import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import  { App } from './App'
import store from "./store"



const appn = 
<Provider store={store}> 
    <BrowserRouter> 
        <App />
    </BrowserRouter>
    </Provider>


ReactDOM.render( 
    appn ,
    document.getElementById('reactroot')
);
