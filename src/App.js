import React from 'react';
import Home from './components/Home/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
    )
}

export default App;
