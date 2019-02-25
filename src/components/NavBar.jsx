import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './Home';
import Todo from './Todo';
import About from './About';
import NotFound from './NotFound';
import Detail from './Detail';

import '../css/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">To Do</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/todo" component={Todo}/>
            <Route path="/about" component={About}/>
            <Route path="/detail/:id" component={Detail}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBar;