import styles from './styles.module.css';

export const Avatar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.crust}>
        <div className={styles.pep}></div>
        <div className={styles.face}>
          <div className={styles.eye}></div>
          <div className={styles.mouth}></div>
        </div>
      </div>
      <div className={styles.melt}></div>
    </div>
  );
};
