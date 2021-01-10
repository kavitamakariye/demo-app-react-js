import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './component/home'; 
import About from './component/about'; 
import Contact from './component/contact';
import './App.css';

class App extends Component {
  render() {
     /* React Router is a standard library for routing in React. 
     Command to install npm install react-router-dom –save */
    return (
      /* BrowserRouter is a router implementation that uses the HTML5 history API.
         Here it is aliased as Router in import. */
      <Router> 
        <div className="App">
          <ul>
            <li>
              {/* Link component is used to create links to different routes and
               implement navigation around the application.
               It works like HTML anchor tag. */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          {/* Switch component is used to render only the first route that matches the location rather than rendering all matching routes. */}
          <Switch> 
            {/* Route is the conditionally shown component that renders some UI when its path matches the current URL */}
              {/* exact is used to match the exact value with the URL. */}
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/about' component={About}></Route> 
              <Route exact path='/contact' component={Contact}></Route> 
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

