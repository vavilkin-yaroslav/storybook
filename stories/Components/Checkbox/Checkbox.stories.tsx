import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Stack } from '@mui/material';

import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export const Primary: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Чекбокс',
    color: 'primary',
  },
};

export const WithoutLabel: StoryObj<typeof Checkbox> = {
  args: {},
};

export const Colors: StoryObj<typeof Checkbox> = {
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

export const Indeterminate: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Неопределённое состояние',
    indeterminate: true,
  },
};

export const DisabledStates: StoryObj<typeof Checkbox> = {
  render: () => (
    <Stack spacing={2}>
      <Checkbox label="Активный" defaultChecked />
      <Checkbox label="Отключённый" disabled />
      <Checkbox label="Отключённый выбранный" disabled defaultChecked />
    </Stack>
  ),
};

export const Sizes: StoryObj<typeof Checkbox> = {
  render: () => (
    <Stack spacing={2}>
      <Checkbox label="Маленький" size="small" />
      <Checkbox label="Средний" size="medium" />
      <Checkbox label="Большой" size="large" />
    </Stack>
  ),
};

export const CheckboxGroup: StoryObj<typeof Checkbox> = {
  render: () => (
    <Stack spacing={2}>
      <Checkbox label="Опция 1" name="group1" />
      <Checkbox label="Опция 2" name="group1" defaultChecked />
      <Checkbox label="Опция 3" name="group1" />
    </Stack>
  ),
};
