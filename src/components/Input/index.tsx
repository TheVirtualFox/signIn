import { InputHTMLAttributes, ReactNode, useId, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ShowPasswordIcon } from './components/ShowPasswordIcon';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

type ButtonProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegister<T>;
  label: string;
  children?: ReactNode;
  name: Path<T>;
  errors: FieldErrors<T>;
};

export const Input = <T extends FieldValues>({ label, register, name, errors, ...inputProps }: ButtonProps<T>) => {
  const id = useId();
  const isPassword = inputProps.type === 'password';
  const [isShowPassword, setIsShowPassword] = useState(false);
  const error = errors?.[name]?.message;
  const isError = Boolean(error);

  const onPasswordIconClick = () => {
    setIsShowPassword((isHidden) => {
      return !isHidden;
    });
  };

  return (
    <div className={classNames(styles.container, { [styles.passwordMode]: isPassword, [styles.errorMode]: isError })}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.relative}>
        <div className={styles.inputContainer}>
          <input
            autoComplete="true"
            {...inputProps}
            {...register(name)}
            id={id}
            type={isShowPassword ? 'text' : inputProps.type}
            className={styles.input}
          />
        </div>

        {isPassword && (
          <ShowPasswordIcon
            className={styles.showPasswordIcon}
            onClick={onPasswordIconClick}
            isShowPassword={isShowPassword}
          />
        )}
      </div>

      <span className={styles.errorCaption}>{error?.toString()}</span>
    </div>
  );
};
