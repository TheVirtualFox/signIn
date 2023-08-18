import styles from './styles.module.css';

export const CreateAccountLink = () => (
  <div className={styles.container}>
    <span>
      Don't have an account?{' '}
      <a href="/" className={styles.link}>
        Signup
      </a>
    </span>
  </div>
);
