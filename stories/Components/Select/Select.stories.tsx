import React from 'react';
import { Select } from './Select';
import { StoryObj, Meta } from '@storybook/react';
import { Stack } from '@mui/material';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { value: 'option1', label: 'Вариант 1' },
  { value: 'option2', label: 'Вариант 2' },
  { value: 'option3', label: 'Вариант 3' },
];

export const Basic: Story = {
  args: {
    options,
    label: 'Выберите вариант',
  },
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Select options={options} label="Outlined (по умолчанию)" variant="outlined" />
      <Select options={options} label="Filled" variant="filled" />
      <Select options={options} label="Standard" variant="standard" />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Select options={options} label="Small" size="small" />
      <Select options={options} label="Medium (по умолчанию)" size="medium" />
    </Stack>
  ),
};

export const WithError: Story = {
  args: {
    options,
    label: 'Ошибочный выбор',
    error: true,
    helperText: 'Обязательное поле',
  },
};

export const Disabled: Story = {
  args: {
    options,
    label: 'Отключенный выбор',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    options,
    label: 'На всю ширину',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutLabel: Story = {
  args: {
    options,
    value: 'option2',
  },
};