const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'Test Service',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'Test Service' });

const run = async () => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

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
      console.log('Doing something based on this event...');
    },
  });
};

/*
  // Producing
  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [{ value: 'Hello KafkaJS user!' }],
  });
*/

run().catch(console.error);
