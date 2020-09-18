import React from 'react';

// Styled Components
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background: none;
  border: none;
  margin: 10px auto 0px auto;
  cursor: pointer;
  outline: none;
  color: white;

  &:hover {
    color: #ff6666;
  }
`;

export default function SmallNavButton({ data, onClick }) {
  return (
    <Button onClick={onClick}>
      <data.icon />
    </Button>
  );
}
