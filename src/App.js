import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./components/Home";
import Comments from "./components/Comments";

import './assets/styles/App.scss';

export const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path="/posts/:id/comments" component={Comments} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;