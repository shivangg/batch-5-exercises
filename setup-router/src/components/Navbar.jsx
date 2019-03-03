import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

import '../styles/App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error404 from './Error404';

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="nav">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/about/" component={About} />
            <Route exact path="/contact/" component={Contact} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
