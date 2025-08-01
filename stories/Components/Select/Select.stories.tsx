import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Stack } from '@mui/material';

import { OPTIONS } from '../../mocks/Select';

import { Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export const Basic: StoryObj<typeof Select> = {
  args: {
    options: OPTIONS,
  },
};

export const Variants: StoryObj<typeof Select> = {
  render: () => (
    <Stack spacing={2}>
      <Select options={OPTIONS} label="Outlined (по умолчанию)" variant="outlined" />
      <Select options={OPTIONS} label="Filled" variant="filled" />
      <Select options={OPTIONS} label="Standard" variant="standard" />
    </Stack>
  ),
};

export const Sizes: StoryObj<typeof Select> = {
  render: () => (
    <Stack spacing={2}>
      <Select options={OPTIONS} label="Small" size="small" />
      <Select options={OPTIONS} label="Medium (по умолчанию)" size="medium" />
    </Stack>
  ),
};

export const WithError: StoryObj<typeof Select> = {
  args: {
    options: OPTIONS,
    label: 'Ошибочный выбор',
    error: true,
    helperText: 'Обязательное поле',
  },
};

export const Disabled: StoryObj<typeof Select> = {
  args: {
    options: OPTIONS,
    label: 'Отключенный выбор',
    disabled: true,
  },
};

export const FullWidth: StoryObj<typeof Select> = {
  args: {
    options: OPTIONS,
    label: 'На всю ширину',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutLabel: StoryObj<typeof Select> = {
  args: {
    options: OPTIONS,
    value: 'option2',
  },
};
