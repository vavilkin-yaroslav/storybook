import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    text: 'Кнопка',
    variant: 'contained',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    text: 'Вторичная кнопка',
    variant: 'outlined',
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    text: 'Большая кнопка',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    text: 'Маленькая кнопка',
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
    text: 'Отключенная кнопка',
  },
};

export const CustomColor: StoryObj<typeof Button> = {
  args: {
    backgroundColor: '#ff00ff',
    text: 'Кастомный цвет',
  },
};

export const FullWidth: StoryObj<typeof Button> = {
  args: {
    fullWidth: true,
    text: 'Кнопка на всю ширину',
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