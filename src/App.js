import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Main from './components/Main.component';
import Navigation from './components/Navigation.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter> 
          <Navigation/>
          <Routes/>          
        </HashRouter>
      </div>
    )
  }
}

export default App;
