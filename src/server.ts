import express from 'express';
import { UserController } from '@controllers/UsersControllers';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Word!' });
});

app.listen(3333); 