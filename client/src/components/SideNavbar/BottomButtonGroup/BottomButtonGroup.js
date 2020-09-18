import React from 'react';

//History
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
