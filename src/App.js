import React, { Component } from 'react';
import './App.css';
import router from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      {router}       
      </div>
    );
  }
}

export default App;
