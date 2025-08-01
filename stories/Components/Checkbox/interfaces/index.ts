import { CheckboxProps as MuiCheckboxProps } from '@mui/material';

export interface ICheckboxProps extends MuiCheckboxProps {
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
