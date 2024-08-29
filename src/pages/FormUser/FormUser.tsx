import { useEffect, useCallback } from 'react';
import { Spinner } from '@/components/Spinner';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from '@/types';
import useGetUser from '@/hooks/useGetUserById';
import { ErrorMessage } from '@/components/ErrorMessage';

type FormUserForm = User;

const FormUser: React.FC = () => {
  const { user, isLoading, error, fetchUser, resetState } = useGetUser();
  const { handleSubmit, register, setValue, reset } = useForm<FormUserForm>();

  // Callback to update form values
  const updateFormValues = useCallback(() => {
    if (user) {
      setValue('id', user.id);
      setValue('name', user.name);
      setValue('lastName', user.lastName);
      setValue('middleName', user.middleName);
    }
  }, [user, setValue]);

  useEffect(() => {
    updateFormValues();
  }, [updateFormValues]);

  const onSubmit: SubmitHandler<FormUserForm> = async (data) => {
    try {
      await fetchUser(data.id);
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  const handleRetry = () => {
    reset(); // Reset form values
    if (resetState) resetState(); // Reset other relevant state if available
  };

  if (error) {
    return <ErrorMessage error={error} onRetry={handleRetry} />;
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      {isLoading && <Spinner message="Cargando usuario..." />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="userId"
            className="block text-sm font-medium text-gray-700"
          >
            ID usuario
          </label>
          <input
            {...register('id')}
            id="userId"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            {...register('name')}
            id="name"
            type="text"
            disabled
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Apellido Materno
          </label>
          <input
            {...register('lastName')}
            id="lastName"
            type="text"
            disabled
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="middleName"
            className="block text-sm font-medium text-gray-700"
          >
            Apellido Paterno
          </label>
          <input
            {...register('middleName')}
            id="middleName"
            type="text"
            disabled
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? 'Cargando...' : 'Buscar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUser;
