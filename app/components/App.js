import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Console from './console';
import Navbar from './navbar';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: 'PT Sans';
  }
`

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Console />
      </div>
    );
  }
}

export default App;
