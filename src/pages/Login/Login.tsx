import { useForm, SubmitHandler } from 'react-hook-form';
import { useLogin } from '@/hooks/useLogin';

type LoginForm = {
  userName: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const { handleLogin, isDisabled } = useLogin();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    handleLogin(data);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
      <div className="px-6 py-8 flex flex-col items-center">
        <img
          src="/src/assets/Logo.png"
          alt="Company Logo"
          className="w-20 h-20 mb-4 object-contain"
        />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Inicio de sesión
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Ingrese su nombre de usuario y contraseña para iniciar sesión
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Nombre de usuario
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Nombre de usuario"
              required
              defaultValue={import.meta.env.VITE_DEFAULT_USERNAME}
              {...register('userName')}
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              defaultValue={import.meta.env.VITE_DEFAULT_PASSWORD}
              {...register('password')}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 ${
              isDisabled
                ? 'cursor-not-allowed bg-gray-400 hover:bg-gray-400'
                : ''
            }`}
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
