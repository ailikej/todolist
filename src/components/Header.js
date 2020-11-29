import React from "react";
import logo from '../logo.svg';

export default function Header(props) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
          </p>
            <h1>{props.title}</h1>
            <div>{props.num}</div>
            <div>{JSON.stringify(props.myObject)}</div>
            <div>{props.myObject.b}</div>
            <div>{props.myArray[0]}</div>
            <div>{props.myFunc(11111220, 12)}</div>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
          </a>
        </header>
    )
}

// export default Header;