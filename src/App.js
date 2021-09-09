import React from 'react';
import Home from './components/Home/Home'
import Register from './components/Home/Forms/Register'
import Login from './components/Home/Forms/Login'
import { Route, Switch } from 'react-router-dom'

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
    )
}

export default App;
