# kafka-es-test
An event sourcing test using Node.js, React, Websockets, and Kafka

Overview is:
- Kafka instance runs in Docker
- "test_service" is a consumer of the topic "test-topic" and console logs whenever it consumes an event
- "websocket_service" receives messages from the client and publishes them to "test-topic". It is also a consumer of the same topic - directly after it publishes the event, it consumes the same event and broadcasts it back to all open clients
- "client" is a react application that has a button to send an event to the server via websocket

To run:
- In one terminal, "npm run server"
- In another terminal, "npm run client"* you want to keep them separated because the react app client will overwrite other outputs

Here is an example of server output:[websocket] Websocket[d8ef4513-e39d-4e4b-930c-f2f6db26c84e]: Received a message from undefined
[websocket] {
[websocket]   topic: 'test-topic',
[websocket]   event: 'message',
[websocket]   data: { message: 'Client button was clicked!' }
[websocket] }
[websocket] Publishing event: message to topic test-topic
[test_service] Consuming event:
[test_service] {
[test_service]   topic: 'test-topic',
[test_service]   partition: 0,
[test_service]   event: 'message',
[test_service]   data: { message: 'Client button was clicked!' }
[test_service] }
[test_service] Doing something based on this event...
[websocket] Consuming event:
[websocket] {
[websocket]   topic: 'test-topic',
[websocket]   partition: 0,
[websocket]   event: 'message',
[websocket]   data: { message: 'Client button was clicked!' }
[websocket] }
[websocket] Broadcasting msg:
[websocket] {"event":"message","data":{"message":"Client button was clicked!"}}
