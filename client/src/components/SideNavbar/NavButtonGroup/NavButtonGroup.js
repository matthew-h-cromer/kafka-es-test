import React from 'react';
// Websocket
import { ws } from '../../../websocket_handler';
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
    history.listen(location => {
      const navRoutes = navButtons.map(navButton => navButton.route);
      if (!navRoutes.includes(location.pathname)) {
        this.setState({ selectedButton: null });
      }
    });
  }

  onClick = ({ buttonIndex, route }) => {
    // Set current selected button
    this.setState({ selectedButton: buttonIndex });
    // Animate the little bar that moves
    anime({
      targets: '#ButtonFollower',
      top: 20 + buttonIndex * 77,
      easing: 'easeOutElastic(1, 2)',
      duration: 500,
    });
    // Go to the new route
    history.push(route);
    // Publish the event to Kafka
    const event = {
      topic: 'user_0',
      event: 'page_navigation',
      data: { message: 'User navigated to "' + route + '"' },
    };
    ws.send(JSON.stringify(event));
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
            onClick={() => this.onClick({ buttonIndex: index, route: navButton.route })}
          />
        ))}
      </div>
    );
  }
}

export default NavButtonGroup;
