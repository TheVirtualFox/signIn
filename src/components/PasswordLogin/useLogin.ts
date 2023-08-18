import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { fetcher } from '../../utils';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const postLogin = async () => {
    toast.remove();
    setIsLoading(true);
    try {
      await fetcher();
      toast.success(`Login success`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error((err as Error).message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, postLogin };
};
