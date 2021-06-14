/*import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './cards';


ReactDOM.render( < React.StrictMode >
    <
    Cards /
    >

    <
    /React.StrictMode>,
    document.getElementById('root')
);*/
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
function App1() {
  return (
    <Fragment>
      <App />
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App1 />, rootElement);
