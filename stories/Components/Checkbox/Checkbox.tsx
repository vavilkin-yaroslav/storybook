import React from 'react';

import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
} from '@mui/material';

interface ICheckboxProps extends MuiCheckboxProps {
  /**
   * Текст рядом с чекбоксом
   * @default undefined
   */
  label?: string;

  /**
   * Цвет чекбокса
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

  /**
   * Состояние неопределённости (indeterminate)
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Дополнительный класс для стилизации
   * @default undefined
   */
  className?: string;

  /**
   * Размер чекбокса
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Отключенное состояние
   * @default false
   */
  disabled?: boolean;

  /**
   * Значение по умолчанию (неконтролируемый компонент)
   * @default false
   */
  defaultChecked?: boolean;
}

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
