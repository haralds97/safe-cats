import React, { Component } from 'react';
import './App.css';
import About from './Components/About/About';
import TwoButtons from './Components/TwoButtons/TwoButtons';
import FirstBackground from './Components/FirstBackground/FirstBackground';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <FirstBackground /> 
        <TwoButtons />
      </div>
    );
  }
}

export default App;
