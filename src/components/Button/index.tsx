import { InputHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Loader } from '../Loader';

type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  variant?: 'outlined';
  type?: 'submit' | 'reset' | 'button';
  isLoading?: boolean;
} & InputHTMLAttributes<HTMLButtonElement>;

export const Button = ({ icon, children, variant, isLoading, ...inputProps }: ButtonProps) => {
  return (
    <button
      {...inputProps}
      className={classNames(styles.button, inputProps.className, {
        [styles.outlinedMode]: variant === 'outlined',
        [styles.loadingMode]: isLoading,
      })}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
};
