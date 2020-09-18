import React from 'react';

//History
import history from '../../Routes/history';

// Animations
import anime from 'animejs';

//Styled components
import styled from 'styled-components';

// Feather icons
import { Home, Tag, Star, List, Monitor } from 'react-feather';

// Custom components
import NavButton from './NavButton';

const navButtons = [
  { title: 'Dashboard', route: '/dashboard', icon: () => <Home /> },
  { title: 'Products', route: '/products', icon: () => <Tag /> },
  { title: 'Sales Orders', route: '/sales-orders', icon: () => <Star /> },
  { title: 'Work Orders', route: '/work-orders', icon: () => <List /> },
  { title: 'Workstations', route: '/workstations', icon: () => <Monitor /> },
];

const ButtonFollower = styled.div`
  position: absolute;
  top: calc(20px);
  left: 0;
  width: 5px;
  height: 57px;
  background-color: #ff6666;
  border-radius: 0 3px 3px 0;
`;

class NavButtonGroup extends React.Component {
  state = {
    selectedButton: 0,
  };

  onClick = ({ buttonIndex, route }) => {
    this.setState({ selectedButton: buttonIndex });
    anime({
      targets: '#ButtonFollower',
      top: 20 + buttonIndex * 77,
      easing: 'easeOutElastic(1, 2)',
      duration: 500,
    });
    history.push(route);
  };

  render() {
    return (
      <div>
        <ButtonFollower id='ButtonFollower' />
        {navButtons.map((navButton, index) => (
          <NavButton
            key={'NavButton' + index}
            index={index}
            data={navButton}
            selected={this.state.selectedButton === index}
            onClick={() => this.onClick({ buttonIndex: index, route: navButton.route })}
          />
        ))}
      </div>
    );
  }
}

export default NavButtonGroup;
