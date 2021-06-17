import React from 'react'

import Dashboard from './Component/Dashboard/Dashboard';
import Error from './Component/Error';
import Quiz from './Component/Quiz/Quiz';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from './Component/Auth/SignIn';

export const App = () => {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component = {Dashboard}/>
          <Route exact path="/login" component = {SignIn}/>
          <Route exact path="/quiz" component = {Quiz}/>
          <Route component = {Error}/>
        </Switch>
      </Router>

    </>
  )
}

export default App;
