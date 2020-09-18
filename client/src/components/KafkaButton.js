import React from 'react';
import { ws } from '../websocket_handler';

class KafkaButton extends React.Component {
  state = {
    producer: null,
  };

  async componentDidMount() {}

  async componentWillUnmount() {}

  onClick = () => {
    console.log('Sending kafka event via websocket');
    const event = {
      topic: 'test-topic',
      event: 'message',
      data: { message: 'Client button was clicked!' },
    };
    console.log(event);
    ws.send(JSON.stringify(event));
  };

  render() {
    return <button onClick={this.onClick}>Send msg to Kafka</button>;
  }
}

export default KafkaButton;
