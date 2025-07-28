import React from 'react';
import PropTypes from 'prop-types';
import {
  Select as MuiSelect,
  MenuItem,
  FormControl,
  InputLabel,
  SelectProps as MuiSelectProps,
  FormHelperText,
} from '@mui/material';

interface ISelectProps {
  /** Значение выбранного элемента */
  value?: string | number;
  /** Варианты для выбора */
  options: Array<{ value: string | number; label: string }>;
  /** Текст подсказки */
  label?: string;
  /** Вариант стиля */
  variant?: 'outlined' | 'filled' | 'standard';
  /** Размер */
  size?: 'small' | 'medium';
  /** Ширина на всю родительскую ширину */
  fullWidth?: boolean;
  /** Ошибка валидации */
  error?: boolean;
  /** Сообщение об ошибке */
  helperText?: string;
  /** Отключенное состояние */
  disabled?: boolean;
  /** Дополнительный класс */
  className?: string;
  /** Обработчик изменения значения */
  onChange?: (event: any) => void;
}

export const Select = ({
  value = '',
  options = [],
  label = '',
  variant = 'outlined',
  size = 'medium',
  fullWidth = false,
  error = false,
  helperText = '',
  disabled = false,
  className = '',
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
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl >
  );
};

Select.propTypes = {
  /** Значение выбранного элемента */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Варианты для выбора */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,

  /** Текст подсказки */
  label: PropTypes.string,

  /** Вариант стиля */
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),

  /** Размер */
  size: PropTypes.oneOf(['small', 'medium']),

  /** Ширина на всю родительскую ширину */
  fullWidth: PropTypes.bool,

  /** Ошибка валидации */
  error: PropTypes.bool,

  /** Сообщение об ошибке */
  helperText: PropTypes.string,

  /** Отключенное состояние */
  disabled: PropTypes.bool,

  /** Дополнительный класс */
  className: PropTypes.string,

  /** Обработчик изменения значения */
  onChange: PropTypes.func,
};

Select.defaultProps = {
  value: '',
  label: '',
  variant: 'outlined',
  size: 'medium',
  fullWidth: false,
  error: false,
  helperText: '',
  disabled: false,
  className: '',
};