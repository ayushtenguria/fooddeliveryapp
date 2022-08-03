/**Module */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";



/**Components */
import App from './App';
import {initialState }from './Context/initialState';
import reducer from './Context/reducer';
import { StateProvider } from './Context/stateProvider';

/**Import Static files */
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <StateProvider initialState={initialState} reducer={reducer} >
    <App/>
  </StateProvider>
  </Router>  
);

