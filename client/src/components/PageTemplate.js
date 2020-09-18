import React, { Fragment } from 'react';

// Styled components
import styled from 'styled-components';

// Custom components
import Logo from './Logo/Logo';

const Container = styled.div`
  height: 100%;
`;

const TitleBar = styled.div`
  padding: 15px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.div`
  font-size: 36px;
`;

const PageContent = styled.div`
  margin: 0 30px;
  height: calc(100vh - 30px - 56px - 30px);
  border-radius: 15px;
  background-color: #f3f3f3;
`;

export default function PageTemplate({ title }) {
  return (
    <Container>
      <TitleBar>
        <Title>{title}</Title>
        <Logo />
      </TitleBar>
      <PageContent />
    </Container>
  );
}
