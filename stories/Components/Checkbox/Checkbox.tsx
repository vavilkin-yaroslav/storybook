import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as MuiCheckbox, FormControlLabel, CheckboxProps as MuiCheckboxProps } from '@mui/material';

interface ICheckboxProps extends MuiCheckboxProps {
  label: string;
};

export const Checkbox = ({
  label,
  color,
  indeterminate,
  className,
  checked,
  onChange,
  ...props
}: ICheckboxProps) => {
  const checkboxElement = (
    <MuiCheckbox
      color={color}
      indeterminate={indeterminate}
      className={className}
      onChange={onChange}
      checked={checked}
      {...props}
    />
  );

  return label ? (
    <FormControlLabel control={checkboxElement} label={label} checked={checked} />
  ) : (
    checkboxElement
  );
};

Checkbox.propTypes = {
  /** Текст рядом с чекбоксом */
  label: PropTypes.string,

  /** Цвет чекбокса */
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'info', 'success']),

  /** Состояние неопределённости (indeterminate) */
  indeterminate: PropTypes.bool,

  /** Дополнительный класс для стилизации */
  className: PropTypes.string,

  /** Обработчик изменения состояния */
  onChange: PropTypes.func,

  /** Размер чекбокса */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Отключенное состояние */
  disabled: PropTypes.bool,

  /** Отмеченное состояние */
  checked: PropTypes.bool,

  /** Значение по умолчанию */
  defaultChecked: PropTypes.bool,
};
