import { createServer, Model, Response } from 'miragejs';
import { User } from '@/types';

export const createMirageServer = () => {
  createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    routes() {
      this.urlPrefix = 'http://localhost:3006';
      this.namespace = 'api';

      this.get('/user/:id', (schema, request) => {
        const id = request.params.id;

        const user = schema.db.users.findBy({ id });

        if (user) {
          return new Response(200, {}, user);
        } else {
          return new Response(
            404,
            {},
            { message: 'El usuario no fue encontrado' }
          );
        }
      });

      this.post('/login', (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody);

        if (
          username === import.meta.env.VITE_DEFAULT_USERNAME &&
          password === import.meta.env.VITE_DEFAULT_PASSWORD
        ) {
          const user = schema.db.users.findBy({ name: 'Azteca' });
          if (user) {
            return new Response(
              200,
              {},
              { message: 'Inicio de sesión exitoso', user }
            );
          } else {
            return new Response(404, {}, { message: 'Usuario no encontrado' });
          }
        } else {
          return new Response(401, {}, { message: 'Credenciales inválidas' });
        }
      });
    },

    seeds(server) {
      server.create('user', {
        id: '1',
        name: 'Azteca',
        middleName: 'S.A.',
        lastName: 'de C.V.',
      });

      server.create('user', {
        id: '2',
        name: 'Jane',
        lastName: 'Doe',
        middleName: 'Marie',
      });
    },
  });
};
