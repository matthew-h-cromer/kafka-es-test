// Kafka
const { Kafka } = require('kafkajs');
const kafka = new Kafka({
  clientId: 'Websocket',
  brokers: ['localhost:9092'],
});
//-----Producer
const producer = kafka.producer();
producer.connect();
//-----Consumer
const consumer = kafka.consumer({ groupId: 'Websocket' });
const run = async () => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: 'user_0', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log('Consuming event:');
      const { event, data } = JSON.parse(message.value.toString());
      console.log({
        topic,
        partition,
        event,
        data,
      });
      broadcast({ event, data });
    },
  });
};
run().catch(console.error);

// Websocket
const WebSocket = require('ws');
const { v4: uuid } = require('uuid');
const wss = new WebSocket.Server({ port: 8080 });
let connections = {};

wss.on('connection', function connection(websocket) {
  const id = uuid();
  connections[id] = websocket;
  console.log('Websocket[' + id + ']: Connected!');
  console.log('Total connections: ' + Object.keys(connections).length);
  producer.send({
    topic: 'user_0',
    messages: [
      {
        value: JSON.stringify({
          event: 'websocket_connected',
          data: { message: 'A user connected.', id },
        }),
      },
    ],
  });

  websocket.on('message', function (string_msg) {
    const msg = JSON.parse(string_msg);
    console.log('Websocket[' + id + ']: Received message:');
    console.log(msg);
    handleEvent(msg);
  });

  websocket.on('error', function (error) {
    console.log('Websocket[' + id + ']: Error: %s', error);
    producer.send({
      topic: 'user_0',
      messages: [
        {
          value: JSON.stringify({
            event: 'websocket_error',
            data: { message: 'A user had a websocket error.', id },
          }),
        },
      ],
    });
  });

  websocket.on('close', function () {
    console.log('Websocket[' + id + ']: Closing');
    delete connections[id];
    console.log('Total connections: ' + Object.keys(connections).length);
    producer.send({
      topic: 'user_0',
      messages: [
        {
          value: JSON.stringify({
            event: 'websocket_closed',
            data: { message: 'A user disconnected.', id },
          }),
        },
      ],
    });
  });
});

async function handleEvent(msg) {
  const { topic, event, data } = msg;
  console.log('Publishing event: ' + event + ' to topic ' + topic);
  // Send the event to Kafka
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify({ event, data }) }],
  });
}

function broadcast(msg) {
  console.log('Broadcasting msg: ');
  console.log(msg);
  const connectionIds = Object.keys(connections);
  for (let i = 0; i < connectionIds.length; i++) {
    connections[connectionIds[i]].send(JSON.stringify(msg));
  }
}
