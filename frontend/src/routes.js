import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainContent from './components/mainContent';
import Search from './components/search';
import Register from './components/Register';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainContent} /> 
                <Route path="/search" component={Search} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}
