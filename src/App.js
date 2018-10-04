import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom";

class App extends Component {
    counter = 0;
    activateLasers = () => {
        console.log("lasers activated..");
        this.counter++;
        ReactDOM.render(<App />, document.getElementById('root'));
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn how to activate lasers.
          </a>
            <button id={"mojgumb"} onClick={this.activateLasers}>
                Activate Lasers  {this.counter}
            </button>
        </header>
      </div>
    );
  }
}

export default App;
