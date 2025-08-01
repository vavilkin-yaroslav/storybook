import React from 'react';

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from '@mui/material';

interface IButtonProps extends MuiButtonProps {
  /** 
   * Кастомный цвет фона (переопределяет стандартный)
   * @default undefined
   */
  backgroundColor?: string;

  /**
   * Текст кнопки
   */
  text: string;

  /**
   * Размер кнопки
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Обработчик клика
   * @default undefined
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Отключенное состояние
   * @default false
   */
  disabled?: boolean;

  /**
   * Растягивание на всю ширину контейнера
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Вариант стиля кнопки
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text';

  /**
   * Цветовая схема
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
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
