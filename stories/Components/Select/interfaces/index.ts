import { BaseSelectProps as MuiBaseSelectProps } from '@mui/material';

export interface ISelectProps extends MuiBaseSelectProps {
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
