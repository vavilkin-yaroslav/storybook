import React from 'react';

import {
  BaseTextFieldProps as MuiTextFieldProps,
  TextField as MuiTextField,
} from '@mui/material';

interface IInputProps extends MuiTextFieldProps {
  /**
   * Текст подсказки (placeholder)
   * @default ''
   */
  placeholder?: string;

  /**
   * Вариант стиля
   * @default 'outlined'
   */
  variant?: 'outlined' | 'filled' | 'standard';

  /**
   * Цветовая схема
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

  /**
   * Размер
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * Ширина на всю родительскую ширину
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Ошибка валидации
   * @default false
   */
  error?: boolean;

  /**
   * Сообщение об ошибке или подсказка
   * @default ''
   */
  helperText?: string;

  /**
   * Дополнительный класс
   * @default ''
   */
  className?: string;

  /**
   * Обработчик изменения значения
   * @default undefined
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
