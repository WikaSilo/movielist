import React, { Component } from 'react';
import './css/App.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="headerContainer">
            <h1 className="App-title">Movielicious!</h1>
          </div>
        </header>
        <br />
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
