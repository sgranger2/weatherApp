import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Forecast from './components/Forecast';
import Details from './components/Details';
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/weatherApp' component={Home} />
            <Route exact path='/weatherApp/forecast' component={Forecast} />
            <Route exact path='/weatherApp/details/:day' component={Details} />
            <Route render={() => {
              return <p><strong>Page Not Found</strong></p>
            }} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
