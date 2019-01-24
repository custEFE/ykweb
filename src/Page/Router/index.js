import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Login from '../Login';
import Main from '../Main';


class YKRouter extends Component {
  state = {

  }

  render() {
    return (
      <Router >
      <div>
      <Switch> 
      <Route exact path="/" component={Login} />
      <Route path="/Main" component={Main} />
     </Switch>
     </div>
     </Router>
    );
  }
}

export default YKRouter;
