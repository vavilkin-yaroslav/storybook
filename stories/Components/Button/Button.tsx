import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface IButtonProps extends Omit<MuiButtonProps, 'variant' | 'color'> {
  backgroundColor?: string;
  label: string;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export const Button = ({
  backgroundColor = '',
  size = 'medium',
  label,
  disabled = false,
  fullWidth = false,
  variant,
  color = 'primary',
  ...props
}: IButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

Button.propTypes = {
  /** Кастомный цвет фона (переопределяет стандартный) */
  backgroundColor: PropTypes.string,

  /** Размер кнопки */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Текст кнопки (обязательный) */
  label: PropTypes.string.isRequired,

  /** Обработчик клика */
  onClick: PropTypes.func,

  /** Отключенное состояние */
  disabled: PropTypes.bool,

  /** Растягивание на всю ширину контейнера */
  fullWidth: PropTypes.bool,

  /** Вариант стиля кнопки */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),

  /** Цветовая схема */
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'info', 'success']),
};

Button.defaultProps = {
  size: 'medium',
  disabled: false,
  fullWidth: false,
  variant: 'contained',
  color: 'primary',
};