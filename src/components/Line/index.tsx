import styles from './styles.module.scss';
import { ReactNode } from 'react';

type LineProps = {
  children: ReactNode;
};

export const Line = ({ children }: LineProps) => (
  <div className={styles.line}>
    <span className={styles.title}>{children}</span>
  </div>
);
