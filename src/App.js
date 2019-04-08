import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Footer from './components/Footer.component';
import Navigation from './components/Navigation.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter> 
          <Navigation/>
          <Routes/> 
          <Footer/>         
        </HashRouter>
      </div>
    )
  }
}

export default App;
