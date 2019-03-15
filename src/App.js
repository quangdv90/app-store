import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import DefaultRoute from './routes/Default.route';
import Home from './home/Home.container';
import Register from './auth/Register.container';
import Login from './auth/Login.container';

const NotMatch = ({ location }) => {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <DefaultRoute exact path="/" component={Home} />
          <DefaultRoute path="/register" component={Register} />
          <DefaultRoute path="/login" component={Login} />
          <Route component={NotMatch} />
        </Switch>
      </div>
    );
  }
}
