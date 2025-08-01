import { ButtonProps as MuiButtonProps } from '@mui/material';

export interface IButtonProps extends MuiButtonProps {
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
