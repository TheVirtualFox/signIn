import styles from './styles.module.css';
import { Input } from '../Input';
import { Button } from '../Button';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    email: yup.string().email().required(),
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

  const postLogin = () => {};

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit(postLogin)}>
      <Input errors={errors} register={register} name="email" label="Email" placeholder="Email" type="email" />
      <Input
        errors={errors}
        register={register}
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
      />
      <Button type="submit" className={styles.submitButton}>
        Sign In
      </Button>
    </form>
  );
};
