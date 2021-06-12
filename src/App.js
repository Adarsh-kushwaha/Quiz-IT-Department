import React from 'react'
import SignIn from "./Component/Auth/SignIn";
import Dashboard from './Component/Dashboard/Dashboard';
import Error from './Component/Error';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component = {Dashboard}/>
          <Route exact path="/login" component = {SignIn}/>
          <Route component = {Error}/>
        </Switch>
      </Router>

    </>
  )
}

export default App;
