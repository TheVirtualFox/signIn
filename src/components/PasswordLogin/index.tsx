import styles from './styles.module.css';
import { Input } from '../Input';
import { Button } from '../Button';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, Toaster } from 'react-hot-toast';
import { fetcher } from '../../utils/fetcher';
import { useState } from 'react';

const schema = yup
  .object({
    email: yup.string().email('Not valid email').required('No email provided.'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })
  .required();

export const PasswordLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const postLogin = async (loginForm: { email: string; password: string }) => {
    toast.remove();
    setIsLoading(true);
    try {
      const loginResult = await fetcher(loginForm);
      toast.success(`Login success`);
    } catch (err: Error) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const isSubmitDisabled = isLoading || !!Object.entries(errors).length;

  return (
    <form noValidate={true} className={styles.form} onSubmit={handleSubmit(postLogin)}>
      <Input errors={errors} register={register} name="email" label="Email" placeholder="Email" type="email" />
      <Input
        errors={errors}
        register={register}
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
      />
      <Button isLoading={isLoading} type="submit" className={styles.submitButton} disabled={isSubmitDisabled}>
        Sign In
      </Button>
    </form>
  );
};
