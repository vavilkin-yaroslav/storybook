import React from 'react';
import { Input } from './Input';
import { StoryObj, Meta } from '@storybook/react';
import { Stack } from '@mui/material';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export const Basic: StoryObj<typeof Input> = {
  args: {
    placeholder: 'Введите текст',
  },
};

export const Variants: StoryObj<typeof Input> = {
  render: () => (
    <Stack spacing={2}>
      <Input placeholder="Outlined (по умолчанию)" variant="outlined" />
      <Input placeholder="Filled" variant="filled" />
      <Input placeholder="Standard" variant="standard" />
    </Stack>
  ),
};

export const Colors: StoryObj<typeof Input> = {
  render: () => (
    <Stack spacing={2}>
      <Input placeholder="Primary" color="primary" />
      <Input placeholder="Secondary" color="secondary" />
      <Input placeholder="Error" color="error" />
      <Input placeholder="Warning" color="warning" />
      <Input placeholder="Info" color="info" />
      <Input placeholder="Success" color="success" />
    </Stack>
  ),
};

export const Sizes: StoryObj<typeof Input> = {
  render: () => (
    <Stack spacing={2}>
      <Input placeholder="Small" size="small" />
      <Input placeholder="Medium (по умолчанию)" size="medium" />
    </Stack>
  ),
};

export const WithError: StoryObj<typeof Input> = {
  args: {
    placeholder: 'Ошибочное поле',
    error: true,
    helperText: 'Обязательное поле',
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    placeholder: 'Отключенное поле',
    disabled: true,
  },
};

export const FullWidth: StoryObj<typeof Input> = {
  args: {
    placeholder: 'Поле на всю ширину',
    fullWidth: true,
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