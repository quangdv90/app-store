import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Notifications from 'react-notification-system-redux';
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

class App extends Component {
  render() {
    const { notifications } = this.props;

    return (
      <div>
        <Switch>
          <DefaultRoute exact path="/" component={Home} />
          <DefaultRoute path="/register" component={Register} />
          <DefaultRoute path="/login" component={Login} />
          <Route component={NotMatch} />
        </Switch>

        <Notifications notifications={notifications} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications
});

export default connect(mapStateToProps, null)(App);
