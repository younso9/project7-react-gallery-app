//This is the main page for the components.  Start all pages like this, importing the reaact module from the react package.

import React, { Component } from 'react';
//Start importing the Router component
import Router from './Router';

import '../index.css';

//Render: ReactDOM.render()
class App extends Component {
    render() {
        return (
            <div className="container">
                <Router />
            </div>
        );
    }
}

export default App;