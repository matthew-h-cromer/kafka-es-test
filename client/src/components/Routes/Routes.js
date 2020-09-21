import React from 'react';

// Router
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';

// Pages
import PageTemplate from '../PageTemplate';
import WorkOrdersPage from '../pages/work-orders/WorkOrdersPage';

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
          <WorkOrdersPage title='Work Orders' />
        </Route>
        <Route path='/workstations'>
          <PageTemplate title='Workstations' />
        </Route>
        <Route path='/system-messages'>
          <PageTemplate title='System Messages' />
        </Route>
        <Route path='/settings'>
          <PageTemplate title='Settings' />
        </Route>
        <Route path='/account'>
          <PageTemplate title='Account' />
        </Route>
        <Route path='/' component={() => <Redirect to='/dashboard'></Redirect>} />
      </Switch>
    </Router>
  );
}
