import React from 'react';
import styled from 'styled-components';

// Custom Components
import NavButtonGroup from './NavButtonGroup/NavButtonGroup';
import BottomButtonGroup from './BottomButtonGroup/BottomButtonGroup';

const SidebarBody = styled.div`
  height: 100%;
  width: 80px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #173753;
  color: white;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export default function SideNavbar() {
  return (
    <SidebarBody>
      <NavButtonGroup />
      <BottomButtonGroup />
    </SidebarBody>
  );
}
