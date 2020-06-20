import React from 'react';
import Board from "./components/Board";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import './styles/index.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/board"> <Board/> </Route>
                <Route path="/sign-up"> <Register/> </Route>
                <Route path="/sign-in"> <Login/> </Route>
            </Switch>
        </Router>
    );
}

export default App;
