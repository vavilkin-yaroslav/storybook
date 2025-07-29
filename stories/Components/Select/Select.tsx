import React from 'react';
import PropTypes from 'prop-types';
import {
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Select as MuiSelect,
  BaseSelectProps as MuiBaseSelectProps,
} from '@mui/material';

interface ISelectProps extends MuiBaseSelectProps {
  options: Array<{ value: string | number; label: string }>;
  helperText?: string;
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
  options: [],
  label: 'Выбрать',
  variant: 'outlined',
  size: 'medium',
  fullWidth: false,
  error: false,
  disabled: false,
  placeholder: '',
  color: 'primary',
};
