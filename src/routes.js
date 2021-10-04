import React from "react";
import {Switch, Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import Home from './components/Home'
import App from './App'
import Alan from './components/Alan'

export default(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/alan' component={Alan} />
        </Switch>
    </HashRouter>
)