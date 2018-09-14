import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Series from '../../containers/Series/series';
import SingleSeries from '../../containers/SingleSeries/SingleSeries';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Series} />
        <Route path="/Series/:id" component={SingleSeries} />
    </Switch>
)

export default Main;