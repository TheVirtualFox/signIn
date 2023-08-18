import styles from './App.module.css';
import { LoginForm } from './components';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <div className={styles.app}>
        <LoginForm />
      </div>
      <Toaster />
    </>
  );
};
