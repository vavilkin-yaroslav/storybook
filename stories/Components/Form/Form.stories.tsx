import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';

import { Form } from './Form';

export default {
  title: 'Complex/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  subcomponents: {
    Input,
    Select,
    Checkbox,
    Button,
  },
} satisfies Meta<typeof Form>;

export const Default: StoryObj<typeof Form> = {
  render: () => <Form />,
};
