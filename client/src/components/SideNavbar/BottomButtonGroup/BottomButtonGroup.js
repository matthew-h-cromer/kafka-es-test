import React from 'react';

// Styled Components
import styled from 'styled-components';

// Feather icons
import { Settings, MessageSquare } from 'react-feather';

// Custom Components
import SmallNavButton from './SmallNavButton';
import Avatar from './Avatar';

const smallNavButtons = [
  { title: 'System Messages', icon: () => <MessageSquare /> },
  { title: 'Settings', icon: () => <Settings /> },
];

const Container = styled.div`
  margin-top: auto;
`;

export default function BottomButtonGroup() {
  return (
    <Container>
      {smallNavButtons.map(smallNavButton => (
        <SmallNavButton data={smallNavButton} />
      ))}
      <Avatar />
    </Container>
  );
}
