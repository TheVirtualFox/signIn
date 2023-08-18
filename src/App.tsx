import styles from './App.module.css';
import { LoginForm } from './components';

export const App = () => {
  return (
    <div className={styles.app}>
      <LoginForm />
    </div>
  );
};
