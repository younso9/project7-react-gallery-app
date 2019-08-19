// This is the main page for the Components.  
// All pages begin by importing the reaact module from the react package.

import React, { Component } from 'react';

// This imports the Router component
import Router from './Router';

// This imports the CSS styling
import '../index.css';

// This renders: ReactDOM.render()
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