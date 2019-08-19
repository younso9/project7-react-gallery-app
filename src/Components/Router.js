import React from "react";

//import necessary Components from react-router-dom module
//https://reacttraining.com/react-router/web/example/url-params
import { BrowserRouter as MainRouter, Route, Switch, NavLink } from "react-router-dom";

//import our Components to be displayed in this Router.js Component
import SearcherForm from './SearcherForm';
import Gallery from './Gallery';
import Home from './Home';
import Error from './Error';

function Router() {
  return (
    <MainRouter>
      <div className="image-finder-title">

      </div>
      <SearcherForm />
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
      {/*three Switch routes:
        1) home page
        2) gallery page
               (accessible from search and nav links - or direct address bar manip)
        3) Error page - default route when the above two are not reached (404)
                  "https://reacttraining.com/react-router/web/guides/basic-components
                  "https://reacttraining.com/react-router/web/example/url-params"
    */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gallery/:type" component={Gallery} />
        <Route component={Error} />
      </Switch>
    </MainRouter>
  );
}

export default Router;