import React from 'react';
import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <ul className="Header">
          <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/our-history">History</NavLink></li>

        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/our-history" component={History}/>

        </Switch>
      </div>)
}
class Home extends React.Component{
  render() {
    return <div>
      <h1>Welcome to Home</h1>
      <p>This is my first React Component.</p>
    </div>
  }
}
class History extends React.Component{
  render() {
    return <div>
      <h1>Our Story</h1>
      <p>This is my second React Component.</p>
    </div>
  }
}

export default App;
