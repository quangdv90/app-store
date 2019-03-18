import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import DefaultRoute from './routes/Default.route';
import SecureRoute from './routes/Secure.route';
import Home from './home/Home.container';
import Register from './auth/Register.container';
import Login from './auth/Login.container';
import Profile from './profile/ProfileEdit.container';
import Secure from './secure/Secure.component';

const NotMatch = ({ location }) => {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

class App extends Component {
  render() {
    const {
      signin: {
        isAuthenticated
      }
    } = this.props.auth;

    return (
      <Switch>
        <DefaultRoute exact path="/" component={Home} />
        <DefaultRoute path="/login" component={Login} />
        <DefaultRoute path="/register" component={Register} />
        <SecureRoute path="/secure" isAuthenticated={isAuthenticated} component={Secure} />
        <SecureRoute path="/profile" isAuthenticated={isAuthenticated} component={Profile} />
        <Route component={NotMatch} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(App);
