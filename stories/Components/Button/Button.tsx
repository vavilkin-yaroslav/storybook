import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface IButtonProps extends MuiButtonProps {
  backgroundColor?: string;
  text: string;
}

export const Button = ({
  backgroundColor,
  size,
  text,
  disabled,
  fullWidth,
  variant,
  color,
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
      {text}
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
  variant: 'contained',
};
