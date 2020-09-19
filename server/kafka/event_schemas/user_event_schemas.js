const user_event_schemas = [
  {
    topic: 'user_{user_id}',
    event: 'websocket_opened',
    user: {
      _id: '',
      firstName: '',
      lastName: '',
      //...
    },
    browser: {
      ipAddress: '',
      version: '',
      //...
    },
  },
  {
    topic: 'user_{user_id}',
    event: 'websocket_error',
    user: {
      _id: '',
      firstName: '',
      lastName: '',
      //...
    },
    browser: {
      ipAddress: '',
      version: '',
      //...
    },
  },
  {
    topic: 'user_{user_id}',
    event: 'websocket_closed',
    user: {
      _id: '',
      firstName: '',
      lastName: '',
      //...
    },
    browser: {
      ipAddress: '',
      version: '',
      //...
    },
  },
  {
    topic: 'user_{user_id}',
    event: 'page_navigation',
    route: '/...',
    user: {
      _id: '',
      firstName: '',
      lastName: '',
      //...
    },
  },
];
