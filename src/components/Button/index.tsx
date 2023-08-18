import { InputHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  variant?: 'outlined';
} & InputHTMLAttributes<HTMLButtonElement>;

export const Button = ({ icon, children, variant, ...inputProps }: ButtonProps) => {
  return (
    <button
      {...inputProps}
      className={classNames(styles.button, inputProps.className, {
        [styles.outlined]: variant === 'outlined',
      })}
    >
      {icon}
      {children}
    </button>
  );
};
