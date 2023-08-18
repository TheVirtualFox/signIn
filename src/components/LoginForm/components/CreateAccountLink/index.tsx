import styles from './styles.module.scss';

export const CreateAccountLink = () => (
  <div>
    <span>
      Don't have an account?{' '}
      <a href="/" className={styles.link}>
        Signup
      </a>
    </span>
  </div>
);
