import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MuiTextField } from '@mui/material';

interface IInputProps {
  /** Текст подсказки (placeholder) */
  placeholder?: string;
  /** Значение поля */
  value?: string;
  /** Вариант стиля */
  variant?: 'outlined' | 'filled' | 'standard';
  /** Цветовая схема */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  /** Размер */
  size?: 'small' | 'medium';
  /** Ширина на всю родительскую ширину */
  fullWidth?: boolean;
  /** Текст ошибки */
  error?: boolean;
  /** Сообщение об ошибке */
  helperText?: string;
  /** Отключенное состояние */
  disabled?: boolean;
  /** Тип поля */
  type?: string;
  /** Дополнительный класс */
  className?: string;
  /** Обработчик изменения значения */
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