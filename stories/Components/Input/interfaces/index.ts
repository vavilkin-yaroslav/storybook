
import { BaseTextFieldProps as MuiTextFieldProps } from '@mui/material';

export interface IInputProps extends MuiTextFieldProps {
  /**
   * Текст подсказки (placeholder)
   * @default ''
   */
  placeholder?: string;

  /**
   * Вариант стиля
   * @default 'outlined'
   */
  variant?: 'outlined' | 'filled' | 'standard';

  /**
   * Цветовая схема
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

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
   * Сообщение об ошибке или подсказка
   * @default ''
   */
  helperText?: string;

  /**
   * Дополнительный класс
   * @default ''
   */
  className?: string;

  /**
   * Обработчик изменения значения
   * @default undefined
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
