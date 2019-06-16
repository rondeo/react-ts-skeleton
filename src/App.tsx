import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Router>
          <div>
            <h2>Welcome to React Router </h2>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Login'}>Login</Link></li>
            </ul>
            <hr />

            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/Login" component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
