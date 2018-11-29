import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import * as ReactDOM from "react-dom";


function Contact(props) {
    return (
        <div className="contact">
            <span>{props.name}</span>
        </div>
    );
}
function ContactList(props) {
    return (
        <div>
            {props.contacts.map(c => <Contact key={c.id} name={c.name} />)}
        </div>
    );
}


class App extends Component {
    counter = 0;
    restavracija = "";

    activateLasers = () => {
        console.log("lasers activated..");
        this.counter++;
        ReactDOM.render(<App />, document.getElementById('root'));
    }

    izberiRestavracijo = () => {
        this.restavracija = "bla";
    }

  render() {
      const contacts = [
          { id: 1, name: "Laterna" },
          { id: 2, name: "Kitajska" },
          { id: 3, name: "Špar" },
          { id: 4, name: "Via bona" }
      ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <ContactList contacts={contacts} />

            <button id={"izberi"} onClick={this.izberiRestavracijo}>
                IZBERI RESTAVRACIJO  {this.restavracija}
            </button>

            <button id={"mojgumb"} onClick={this.activateLasers}>
                Activate Lasers  {this.counter}
            </button>

        </header>
      </div>
    );
  }
}

export default App;
