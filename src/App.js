import React, { Component } from 'react';
import './App.css';
import About from './Components/About/About';
import TwoButtons from './Components/TwoButtons/TwoButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
          <p>

          Save cats will be here : (

          </p>
        <TwoButtons />
      </div>
    );
  }
}

export default App;
