import React, { Component } from 'react';
import './App.css';
import Login from './components/login/Login';
import { Home, News, Profile, Navigation } from './components';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
  
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: localStorage.getItem('user')
    };
  }

  setUser(user) {
    console.log('user: ', user);
    this.setState(user);
  }
  render() {
    return (
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route
            path="/login"
            render={props => (
              <Login setUser={this.setUser.bind(this)} {...props} />
            )}
          />
        </Switch>
        <Switch>
          <Route path="/news" render={props => <News {...props} />} />
        </Switch>
        {this.state.user ? (
          <Switch>
            <Route
              path="/profile"
              render={props => (
                <Profile setUser={this.setUser.bind(this)} {...props} />
              )}
            />
          </Switch>
        ) : (
          <Switch>
            <Redirect from="/profile" to="/login" />
          </Switch>
        )}

        <Switch>
          <Route path="/" exact render={props => <Home {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
