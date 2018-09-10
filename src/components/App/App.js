import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ViewLogin from "./../ViewLogin/ViewLogin";
import ViewServers from "./../ViewServers/ViewServers";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends Component {
  state = {
    loggedIn: true
  };

  handleLogin = username => {
    console.log("handleLogin");
    this.setState({ loggedIn: true });
  };

  handleLogout = username => {
    console.log("handleLogout");
    this.setState({ loggedIn: false });
  };

  render() {
    const { loggedIn } = this.state;

    return (
      <div id="App">
        <Router>
          <Switch>
            <Route
              path="/login"
              render={() =>
                loggedIn ? (
                  <Redirect to="/servers" />
                ) : (
                  <ViewLogin onLogin={this.handleLogin} />
                )
              }
            />
            <ProtectedRoute
              path="/servers"
              isAuthenticated={loggedIn}
              onLogout={this.handleLogout}
              component={ViewServers}
            />
            } />
            {/* <Route path="/servers" component={ViewServers} /> */}
            <Route
              render={() =>
                loggedIn ? <Redirect to="/servers" /> : <Redirect to="/login" />
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
