import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import styles from './styles.module.scss';
import classNames from 'classnames';

type ShowPasswordIconProps = {
  isShowPassword: boolean;
  onClick: () => void;
  className?: string;
};

export const ShowPasswordIcon = ({ isShowPassword, onClick, className }: ShowPasswordIconProps) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, className)}
      onClick={onClick}
      aria-label={isShowPassword ? 'Hide password' : 'Show password'}
    >
      {isShowPassword ? <EyeIcon /> : <EyeSlashIcon />}
    </button>
  );
};
