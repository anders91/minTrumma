import React, { Component } from 'react';
import './App.css';
import './StartPage'
import StartPage from './StartPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>En hejdundrans trumapparat</h1>
        <StartPage />
      </div>

    );
  }
}

export default App;
