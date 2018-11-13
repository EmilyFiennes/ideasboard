import React, { Component } from 'react';
import './App.css';
import IdeasContainer from './components/IdeasContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Idea Board</h2>
        </header>
        <div className="Container">
          <IdeasContainer />
        </div>
      </div>
    );
  }
}

export default App;
