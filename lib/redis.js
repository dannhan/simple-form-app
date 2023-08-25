import { createClient } from 'redis';
import { Schema, Repository } from 'redis-om';

const client = createClient({
    password: process.env.REDIS_PASS,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    }
});
client.on('error', (err) => console.log(err));
await client.connect();

const schema = new Schema('car', {
    make: { type: 'string' },
    model: { type: 'string' },
    image: { type: 'string' },
    description: { type: 'string' },
  },
  {
    dataStructure: 'JSON',
  },
);

export async function createCar(data) {
  const repository = new Repository(schema, client);

  const id = await repository.save(data);
  return id;
}