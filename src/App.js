import React from 'react';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard'

import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Dashboard" component={Dashboard} exact />
        </Switch>
    )
}

export default App;
