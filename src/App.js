import React from "react";
import Mockup from "./containers/Mockup";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import Test from "./containers/Test";


const App = () => {
  return (
    <>
      <Router history={createBrowserHistory()}>
        <Mockup />
        <Test/>
      </Router>
    </>
  );
};

export default App;
