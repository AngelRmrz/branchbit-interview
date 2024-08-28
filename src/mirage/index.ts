import { createServer, Model } from 'miragejs';
import { User } from '../types/users';

export const createMirageServer = () => {
  createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    routes() {
      this.urlPrefix = 'http://localhost:3006';
      this.namespace = 'api';
      this.timing = 1000;

      this.get('/users', (schema) => {
        return schema.all('user');
      });
    },

    seeds(server) {
      server.create('user', {
        id: '1',
        name: 'Angel',
        lastName: 'Ramirez',
        middleName: 'Calderón',
      });

      server.create('user', {
        id: '2',
        name: 'Fernando',
        lastName: 'Herrera',
        middleName: 'Perez',
      });
    },
  });
};
