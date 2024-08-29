import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import axios from 'axios';
import { User } from '@/types';

type UseGetUserResult = {
  user: User | null;
  isLoading: boolean;
  error: AxiosError | null;
  fetchUser: (id: string | number) => Promise<void>;
  resetState: () => void;
};

const useGetUser = (): UseGetUserResult => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchUser = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/user/${id}`);
      setUser(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetState = useCallback(() => {
    setUser(null);
    setError(null);
  }, []);

  return {
    user,
    isLoading,
    error,
    fetchUser,
    resetState,
  };
};

export default useGetUser;
