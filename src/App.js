import React, { Component } from 'react';
import './App.css'
import Pages from './pages/pages'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/components/login/login'
import Register from './pages/components/register/register'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Pages} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
