import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export type UnauthorizedProps = {
  message?: string;
};

export default function Unauthorized({ message }: UnauthorizedProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <AlertCircle
            className="mx-auto h-12 w-12 text-red-500"
            aria-hidden="true"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            No autorizado
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {message || 'Por favor, inicie sesión para acceder a esta página.'}
          </p>
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Volver a la página de inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
