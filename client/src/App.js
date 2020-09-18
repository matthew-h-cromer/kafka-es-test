import React from 'react';
import './App.css';

// Styled Components
import styled from 'styled-components';

// Custom components
import SideNavbar from './components/SideNavbar/SideNavbar';
import Routes from './components/Routes/Routes';

const Content = styled.div`
  height: 100%;
  margin-left: 80px;
`;

function App() {
  return (
    <div className='App'>
      <SideNavbar />
      <Content id='Content'>
        <Routes />
      </Content>
    </div>
  );
}

export default App;
