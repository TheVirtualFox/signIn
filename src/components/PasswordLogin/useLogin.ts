import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { fetcher } from '../../utils';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const postLogin = async (loginForm: { email: string; password: string }) => {
    toast.remove();
    setIsLoading(true);
    try {
      await fetcher(loginForm);
      toast.success(`Login success`);
    } catch (err: Error) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, postLogin };
};
