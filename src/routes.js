import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Search from './components/search';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/search" component={Search} />
            </Switch>
        </BrowserRouter>
    );
}
