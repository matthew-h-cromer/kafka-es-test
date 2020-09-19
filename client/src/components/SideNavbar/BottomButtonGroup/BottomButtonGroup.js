import React from 'react';
// Websocket
import { ws } from '../../../websocket_handler';
// History
import history from '../../Routes/history';
// Styled Components
import styled from 'styled-components';
// Feather icons
import { Settings, MessageSquare } from 'react-feather';
// Custom Components
import SmallNavButton from './SmallNavButton';
import Avatar from './Avatar';

const smallNavButtons = [
  { title: 'System Messages', route: '/system-messages', icon: () => <MessageSquare /> },
  { title: 'Settings', route: '/settings', icon: () => <Settings /> },
];

const Container = styled.div`
  margin-top: auto;
`;

export default function BottomButtonGroup() {
  const onClick = ({ route }) => {
    history.push(route);
    // Publish the event to Kafka
    const event = {
      topic: 'user_0',
      event: 'page_navigation',
      data: { message: 'User navigated to "' + route + '"' },
    };
    ws.send(JSON.stringify(event));
  };

  return (
    <Container>
      {smallNavButtons.map((smallNavButton, index) => (
        <SmallNavButton
          key={'SmallNavButton' + index}
          data={smallNavButton}
          onClick={() => onClick({ route: smallNavButton.route })}
        />
      ))}
      <Avatar onClick={() => onClick({ route: '/account' })} />
    </Container>
  );
}
