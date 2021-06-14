import React from 'react';
import './App.css';
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./component/Login/Login";
import Detail from "./component/Detail/Detail";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/Home/" component={Home} />
                <Route exact path="/Detail/:id" component={Detail} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
