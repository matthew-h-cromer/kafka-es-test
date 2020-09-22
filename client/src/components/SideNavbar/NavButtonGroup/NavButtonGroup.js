import React from 'react';
// History
import history from '../../Routes/history';
// Animations
import anime from 'animejs';
// Styled components
import styled from 'styled-components';
// Feather icons
import { Home, Tag, List, Monitor } from 'react-feather';
// Material UI
import AttachMoneyRounded from '@material-ui/icons/AttachMoneyRounded';
// Custom components
import NavButton from './NavButton';

const navButtons = [
  { title: 'Dashboard', route: '/dashboard', icon: () => <Home /> },
  { title: 'Products', route: '/products', icon: () => <Tag /> },
  { title: 'Sales Orders', route: '/sales-orders', icon: () => <AttachMoneyRounded /> },
  { title: 'Work Orders', route: '/work-orders', icon: () => <List /> },
  { title: 'Workstations', route: '/workstations', icon: () => <Monitor /> },
];

const ButtonFollower = styled.div`
  position: absolute;
  top: calc(20px);
  left: 0;
  width: 5px;
  height: 57px;
  background-color: ${props => (props.show ? '#ff6666' : 'rgba(0, 0, 0, 0)')};
  border-radius: 0 3px 3px 0;
`;

class NavButtonGroup extends React.Component {
  state = {
    selectedButton: 0,
  };

  componentDidMount() {
    // React to initial route
    const navRoutes = navButtons.map(navButton => navButton.route);
    if (!navRoutes.includes(history.location.pathname)) {
      this.setState({ selectedButton: null });
    }

    // Listen to subsequent routes
    history.listen(location => {
      console.log(location.pathname);
      const navRoutes = navButtons.map(navButton => navButton.route);
      if (!navRoutes.includes(location.pathname)) {
        this.setState({ selectedButton: null });
      } else {
        const newIndex = navRoutes.findIndex(route => route === location.pathname);
        console.log('newIndex: ' + newIndex);
        this.setState({
          selectedButton: newIndex,
        });
        anime({
          targets: '#ButtonFollower',
          top: 20 + newIndex * 77,
          easing: 'easeOutElastic(1, 2)',
          duration: 500,
        });
      }
    });
  }

  onClick = ({ route }) => {
    // Go to the new route
    history.push(route);
  };

  render() {
    return (
      <div>
        <ButtonFollower id='ButtonFollower' show={this.state.selectedButton !== null} />
        {navButtons.map((navButton, index) => (
          <NavButton
            key={'NavButton' + index}
            index={index}
            data={navButton}
            selected={this.state.selectedButton === index}
            onClick={() => this.onClick({ route: navButton.route })}
          />
        ))}
      </div>
    );
  }
}

export default NavButtonGroup;
