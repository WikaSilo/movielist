import React, { Component } from 'react';
import BoardView from './BoardView'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <BoardView />
      </div>
    );
  }
}

export default Home;