import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  

  // componentDidMount() {
  //   axios.get(`http://localhost:5000/api/jokes`)
  //   .then(res => {
  //     this.setState({ jokes: res.data })
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Route path = '/signin' component={Signin} />

      </div>
    );
  }
}

export default App;
