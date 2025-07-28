import React from 'react';
import { Button } from './Button';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

// Базовая кнопка
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Основная кнопка',
  },
};

// Вторичная кнопка
export const Secondary: Story = {
  args: {
    label: 'Вторичная кнопка',
    variant: 'outlined',
  },
};

// Большая кнопка
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Большая кнопка',
  },
};

// Маленькая кнопка
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Маленькая кнопка',
  },
};

// Отключенная кнопка
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Отключенная кнопка',
  },
};

// Кнопка с кастомным цветом
export const CustomColor: Story = {
  args: {
    backgroundColor: '#ff00ff',
    label: 'Кастомный цвет',
  },
};

// Кнопка на всю ширину
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Кнопка на всю ширину',
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};