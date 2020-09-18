import React from 'react';

// Styled Components
import styled from 'styled-components';

// Material UI
import MUI_Avatar from '@material-ui/core/Avatar';

const Button = styled.button`
  width: 100%;
  background: none;
  border: none;
  margin: 10px auto 20px auto;
  cursor: pointer;
  outline: none;
  color: white;

  display: flex;
  justify-content: center;

  &:hover {
    color: #ff6666;
  }
`;

export default function Avatar({ onClick }) {
  return (
    <Button onClick={onClick}>
      <MUI_Avatar>MC</MUI_Avatar>
    </Button>
  );
}
