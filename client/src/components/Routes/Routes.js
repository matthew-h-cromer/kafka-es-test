import React, { useState, useEffect } from 'react';
// Router
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';
// Websocket
import { ws } from '../../websocket_handler';
// Pages
import PageTemplate from '../PageTemplate';
import WorkOrdersPage from '../pages/work-orders/WorkOrdersPage';

export default function Routes() {
  // Monitor history changes
  const [mounted, setMounted] = useState(null);
  useEffect(() => {
    console.log('Mounting!');
    //publishNavEvent(history.location.pathname);
    listenToHistory();
  });
  const listenToHistory = () => {
    history.listen(location => {
      console.log('History changed!');
      publishNavEvent(location.pathname);
    });
  };

  const publishNavEvent = route => {
    // Publish the event to Kafka
    const event = {
      topic: 'user_0',
      event: 'page_navigation',
      data: { message: 'User navigated to "' + route + '"' },
    };
    ws.send(JSON.stringify(event));
  };

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
