// Available message methods:
// - info
// - success
// - error
// - warning
import { message } from 'antd';
import 'antd/dist/antd.css';

export let ws = null;

async function connectWebsocket() {
  console.log('Connecting websocket...');
  ws = await new WebSocket('ws://' + window.location.hostname + ':8080');

  ws.onopen = () => {
    message.success('Websocket connected!');
  };

  ws.onclose = () => {
    message.error('Websocket connection closed, attempting reconnect in 5s...');
    setTimeout(() => {
      connectWebsocket();
    }, 5000);
  };

  ws.onerror = () => {
    message.error('Websocket had an error!');
  };

  ws.onmessage = message => {
    handleWebsocketMessage({ ws, string_msg: message.data });
  };
}

const handleWebsocketMessage = ({ ws, string_msg }) => {
  const msg = JSON.parse(string_msg);
  message.info('Received message from server: ' + msg.data.message);
  console.log(msg);
};

connectWebsocket();
