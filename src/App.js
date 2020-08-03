import React from "react";
import logo from "./logo.svg";
import "./App.css";

function alectAction() {
  alert("hello world");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => alectAction()}>
          onClick={() => alectAction()}
          Edit <code>src/App.js</code>hello Dabin
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
