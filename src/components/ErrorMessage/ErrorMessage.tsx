import { AxiosError } from 'axios';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export type ErrorMessageProps = {
  error: AxiosError;
  onRetry?: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, onRetry }) => {
  return (
    <div
      className="max-w-lg mx-auto mt-8 p-6 bg-red-50 rounded-lg shadow-lg"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-center space-x-3 text-red-700">
        <AlertCircle className="h-6 w-6" />
        <h2 className="text-lg font-semibold">Oops! Algo ha ido mal.</h2>
      </div>
      <p className="mt-2 text-red-600 text-center">
        {error.message || 'Oops, algo ha ido mal!'}
      </p>
      <div className="mt-6 flex space-x-4 justify-center">
        <button
          onClick={onRetry}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Reintentar
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
