import styles from './styles.module.css';
import { Input } from '../Input';
import { Button } from '../Button';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from './useLogin';

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

  const { isLoading, postLogin } = useLogin();

  const isSubmitDisabled = isLoading || !!Object.entries(errors).length;

  return (
    <form noValidate={true} className={styles.form} onSubmit={handleSubmit(postLogin)}>
      <Input
        autoComplete="email"
        errors={errors}
        register={register}
        name="email"
        label="Email"
        placeholder="Email"
        type="email"
        isRequired
      />
      <Input
        errors={errors}
        register={register}
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
        autoComplete="current-password"
        isRequired
      />
      <Button isLoading={isLoading} type="submit" className={styles.submitButton} disabled={isSubmitDisabled}>
        Sign In
      </Button>
    </form>
  );
};
