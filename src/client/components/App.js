import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import HomePage from './Home';
import RolesPage from './Roles';
import ClientsPage from './Clients';
import NotFoundPage from './404';


class App extends Component {

  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/clients" activeStyle={activeStyle}>Clients</NavLink>
          {' | '}
          <NavLink to="/roles" activeStyle={activeStyle}>Roles</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/clients" component={ClientsPage} />
          <Route exact path="/roles" component={RolesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
