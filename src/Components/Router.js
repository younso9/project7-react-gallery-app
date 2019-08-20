import React from "react";

// This imports the needed Components from react-router-dom module
// Resource: https://reacttraining.com/react-router/web/example/url-params
import { BrowserRouter as MainRouter, Route, NavLink, Switch } from "react-router-dom";

//  This imports Components to be displayed in Router.js Component
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import Home from './Home';
import Error from './Error';

function Router() {
  return (
    <MainRouter>
      <div className="image-finder-title">

      </div>
      <SearchForm />
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/gallery/moonlight">Moonlight</NavLink>
            </li>
            <li>
              <NavLink to="/gallery/seashells">Seashells</NavLink>
            </li>
            <li>
              <NavLink to="/gallery/floetry"> Floetry</NavLink>
            </li>
            <li>
              <NavLink to="/gallery/zen">Zen</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {
    //  Resource:
    // "https://reacttraining.com/react-router/web/guides/basic-components
        
    // *Switch routes:
    //     1) Home Page
    //     2) Gallery Page (Made accessible via search and nav links)       
    //     3) Error Page - rendered when the above are not assessed (404 delivered) 
    
    //  Resource:
    //  https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md
      }
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gallery/:type" component={Gallery} />
        <Route component={Error} />
      </Switch>
    </MainRouter>
  );
}

export default Router;