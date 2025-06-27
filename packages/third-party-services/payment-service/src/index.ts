import { createServer } from './server';

const server = createServer();

// start the server
const start = async () => {
  try {

    await server.listen({ port: 3000 });
    console.log('Server running on http://localhost:3000');
  } catch (err) {
    console.log('errr', err)
    server.log.error(err);
    process.exit(1);
  }
};

start();
