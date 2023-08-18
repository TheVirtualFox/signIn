import styles from './styles.module.css';
import { AuthProviders } from '../AuthProviders';
import { Line } from '../Line';
import { PasswordLogin } from '../PasswordLogin';
import { CreateAccountLink, LoginFormTitle } from './components';

export const LoginForm = () => {
  return (
    <main className={styles.loginForm}>
      <LoginFormTitle />
      <PasswordLogin />
      <CreateAccountLink />

      <Line>OR</Line>
      <AuthProviders />
    </main>
  );
};
