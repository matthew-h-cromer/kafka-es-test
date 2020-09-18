import React from 'react';

// Styled components
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background: none;
  border: none;
  margin: 20px auto 0px auto;
  cursor: pointer;
  outline: none;
  color: ${props => (props.selected ? '#ff6666' : 'white')};

  &:hover {
    color: #ff6666;
  }
`;

const Circle = styled.div`
  border: 2px solid white;
  border-color: ${props => (props.selected ? '#ff6666' : 'white')};
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 0px auto 0px auto;

  display: flex;
  justify-content: center;
  align-items: center;

  ${Button}:hover & {
    border-color: #ff6666;
  } ;
`;

const Subtitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 10px;
`;

export default function NavButton({ data, selected, onClick }) {
  return (
    <Button onClick={onClick} selected={selected}>
      <Circle selected={selected}>
        <data.icon />
      </Circle>
      <Subtitle>{data.title}</Subtitle>
    </Button>
  );
}
