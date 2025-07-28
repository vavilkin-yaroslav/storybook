import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MuiTextField } from '@mui/material';

interface IInputProps {
  name?: string;
  placeholder?: string;
  value?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  type?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  placeholder = '',
  variant = 'outlined',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  error = false,
  helperText = '',
  className = '',
  ...props
}: IInputProps) => {
  return (
    <MuiTextField
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