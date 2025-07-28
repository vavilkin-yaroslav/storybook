import React from 'react';
import { Checkbox } from './Checkbox';
import { StoryObj, Meta } from '@storybook/react';
import { Stack } from '@mui/material';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    onChange: { action: 'changed' },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

// Базовый чекбокс
export const Primary: Story = {
  args: {
    label: 'Базовый чекбокс',
    color: 'primary',
  },
};

// Чекбокс без текста
export const WithoutLabel: Story = {
  args: {},
};

// Разные цвета
export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Checkbox label="Primary" color="primary" defaultChecked />
      <Checkbox label="Secondary" color="secondary" defaultChecked />
      <Checkbox label="Error" color="error" defaultChecked />
      <Checkbox label="Warning" color="warning" defaultChecked />
      <Checkbox label="Info" color="info" defaultChecked />
      <Checkbox label="Success" color="success" defaultChecked />
    </Stack>
  ),
};

// Неопределенное состояние
export const Indeterminate: Story = {
  args: {
    label: 'Неопределённое состояние',
    indeterminate: true,
  },
};

// Состояния отключения
export const DisabledStates: Story = {
  render: () => (
    <Stack spacing={2}>
      <Checkbox label="Активный" defaultChecked />
      <Checkbox label="Отключённый" disabled />
      <Checkbox label="Отключённый выбранный" disabled defaultChecked />
    </Stack>
  ),
};

// Разные размеры
export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Checkbox label="Маленький" size="small" />
      <Checkbox label="Средний" size="medium" />
      <Checkbox label="Большой" size="large" />
    </Stack>
  ),
};

// Группа чекбоксов
export const CheckboxGroup: Story = {
  render: () => (
    <Stack spacing={2}>
      <Checkbox label="Опция 1" name="group1" />
      <Checkbox label="Опция 2" name="group1" defaultChecked />
      <Checkbox label="Опция 3" name="group1" />
    </Stack>
  ),
};