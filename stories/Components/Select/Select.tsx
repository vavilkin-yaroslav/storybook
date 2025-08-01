import React from 'react';

import {
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Select as MuiSelect,
  BaseSelectProps as MuiBaseSelectProps,
} from '@mui/material';

interface ISelectProps extends MuiBaseSelectProps {
  /**
   * Варианты для выбора
   * @default []
   */
  options: { value: any, label: any }[];

  /**
   * Сообщение подсказки или ошибки
   * @default undefined
   */
  helperText?: string;

  /**
   * Значение выбранного элемента
   * @default ''
   */
  value?: string | number;

  /**
   * Текст подсказки (label)
   * @default 'Выбрать'
   */
  label?: string;

  /**
   * Вариант стиля
   * @default 'outlined'
   */
  variant?: 'outlined' | 'filled' | 'standard';

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
   * Отключенное состояние
   * @default false
   */
  disabled?: boolean;

  /**
   * Дополнительный класс
   * @default ''
   */
  className?: string;

  /**
   * Цветовая схема
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export const Select = ({
  value,
  options,
  label,
  variant,
  size,
  fullWidth,
  error,
  helperText,
  disabled,
  className,
  onChange,
  ...props
}: ISelectProps) => {
  return (
    <FormControl
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      error={error}
      className={className}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect
        style={{ minWidth: '250px' }}
        value={value}
        onChange={onChange}
        disabled={disabled}
        label={label}
        {...props}
      >
        {options.map((option, index) => (
          <MenuItem key={crypto.randomUUID()} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl >
  );
};
