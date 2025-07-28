import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MuiTextField, BaseTextFieldProps as MuiTextFieldProps } from '@mui/material';

interface IInputProps extends MuiTextFieldProps {
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  placeholder,
  variant,
  color,
  size,
  fullWidth,
  error,
  helperText,
  className,
  onChange,
  ...props
}: IInputProps) => {
  return (
    <MuiTextField
      onChange={onChange}
      placeholder={placeholder}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      error={error}
      helperText={helperText}
      className={className}
      {...props}
    />
  );
};

Input.propTypes = {
  /** Текст подсказки (placeholder) */
  placeholder: PropTypes.string,

  /** Значение поля */
  value: PropTypes.string,

  /** Вариант стиля */
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),

  /** Цветовая схема */
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'info', 'success']),

  /** Размер */
  size: PropTypes.oneOf(['small', 'medium']),

  /** Ширина на всю родительскую ширину */
  fullWidth: PropTypes.bool,

  /** Ошибка валидации */
  error: PropTypes.bool,

  /** Сообщение об ошибке или подсказка */
  helperText: PropTypes.string,

  /** Отключенное состояние */
  disabled: PropTypes.bool,

  /** Тип поля */
  type: PropTypes.string,

  /** Дополнительный класс */
  className: PropTypes.string,

  /** Обработчик изменения значения */
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  variant: 'outlined',
  color: 'primary',
  size: 'medium',
  fullWidth: false,
  error: false,
  helperText: '',
  className: '',
};