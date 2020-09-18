import React from 'react';

// Router
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';

// Pages
import PageTemplate from '../PageTemplate';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/dashboard'>
          <PageTemplate title='Dashboard' />
        </Route>
        <Route path='/products'>
          <PageTemplate title='Products' />
        </Route>
        <Route path='/sales-orders'>
          <PageTemplate title='Sales Orders' />
        </Route>
        <Route path='/work-orders'>
          <PageTemplate title='Work Orders' />
        </Route>
        <Route path='/workstations'>
          <PageTemplate title='Workstations' />
        </Route>
        <Route path='/' component={() => <Redirect to='/dashboard'></Redirect>} />
      </Switch>
    </Router>
  );
}
